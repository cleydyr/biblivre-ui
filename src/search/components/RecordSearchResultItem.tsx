import {
  EuiAvatar,
  EuiBadge,
  EuiButtonEmpty,
  EuiCard,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiFlexItem,
  EuiI18n,
  EuiIcon,
  EuiPanel,
  EuiSkeletonRectangle,
  EuiSkeletonTitle,
  EuiSpacer,
  EuiText,
  useEuiBackgroundColor,
  useEuiBackgroundColorCSS,
  useEuiI18n,
} from "@elastic/eui";
import { OpenBiblivreBibliographicRecord, type BiblioRecord } from "../types";
import { useEffect, useState } from "react";
import { BibliographicSearchAPI } from "../api/search";
import ImageCarousel from "./ImageCarousel";

type RecordSearchResultItemPropos = {
  record: BiblioRecord;
  isLoading: boolean;
  onClick: (openedRecord?: OpenBiblivreBibliographicRecord) => void;
  onAddToExport: () => void;
  api: BibliographicSearchAPI;
};

const IMAGE_SIZE = 320;

type RecordSearchResultItemState = {
  isLoadingCover: boolean;
  openedRecord?: OpenBiblivreBibliographicRecord;
  isImageError?: boolean;
};

const RecordSearchResultItem = ({
  record: {
    id: recordId,
    holdingsAvailable,
    title,
    author,
    publicationYear,
    subject,
    materialType,
    json,
  },
  isLoading,
  onClick,
  onAddToExport,
  api,
}: RecordSearchResultItemPropos) => {
  const initialState: RecordSearchResultItemState = {
    isLoadingCover: true,
  };

  const [state, setState] = useState(initialState);

  const edition = json?.["250"]?.[0]?.["a"]?.[0];

  const { isLoadingCover, openedRecord, isImageError } = state;

  const backgroundColorCSS = useEuiBackgroundColor("subdued");

  useEffect(() => {
    async function openRecord() {
      const { data: openedRecord } = await api.open(recordId);

      setState({
        ...state,
        openedRecord,
        isLoadingCover: false,
      });
    }

    openRecord();
  }, [recordId]);

  return (
    <EuiCard
      // onClick={() => onClick(openedRecord)}
      image={
        <EuiFlexGroup justifyContent="center">
          <EuiSkeletonRectangle
            isLoading={isLoadingCover || isLoading}
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
          >
            {!isImageError && hasAttachments(openedRecord) ? (
              <ImageCarousel
                height={320}
                imageUrls={openedRecord.attachments.map(({ uri }) =>
                  api.attachmentURL(uri)
                )}
                onError={() => setState({ ...state, isImageError: true })}
              />
            ) : (
              <EuiFlexGroup
                style={{
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  background: backgroundColorCSS,
                }}
                alignItems="center"
                justifyContent="center"
              >
                <EuiIcon type="questionInCircle" size="xxl" />
              </EuiFlexGroup>
            )}
          </EuiSkeletonRectangle>
        </EuiFlexGroup>
      }
      title={
        isLoading ? (
          <EuiSkeletonTitle size="l" />
        ) : (
          <EuiFlexGroup alignItems="flexStart" justifyContent="spaceAround">
            <EuiFlexItem>
              <span
                style={{
                  overflow: "hidden",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  display: "-webkit-box",
                }}
              >
                {title}
              </span>
            </EuiFlexItem>
          </EuiFlexGroup>
        )
      }
      titleElement="h4"
      textAlign="left"
      betaBadgeProps={{
        label: useEuiI18n(`marc.material_type.${materialType}`, "Book"),
      }}
      footer={
        <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
          <EuiSkeletonTitle isLoading={isLoading}>
            <EuiBadge color={holdingsAvailable > 0 ? "primary" : "default"}>
              <EuiI18n
                token={`cataloging.holding.availability.${
                  holdingsAvailable > 0 ? "available" : "unavailable"
                }`}
                default="?"
              />
            </EuiBadge>
          </EuiSkeletonTitle>
          <EuiSkeletonRectangle isLoading={isLoading}>
            <EuiButtonEmpty
              size="xs"
              iconType="exportAction"
              iconSize="s"
              onClick={onAddToExport}
            >
              Exportar
            </EuiButtonEmpty>
          </EuiSkeletonRectangle>
        </EuiFlexGroup>
      }
    >
      <EuiFlexGrid>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiSkeletonTitle isLoading={isLoading}>
              <EuiText>{author}</EuiText>
            </EuiSkeletonTitle>
            <EuiSpacer size="xs" />
            <EuiSkeletonTitle isLoading={isLoading} size="s">
              <EuiText size="s">{publicationYear}</EuiText>
            </EuiSkeletonTitle>
            <EuiSpacer size="xs" />
            <EuiSkeletonTitle isLoading={isLoading} size="xs">
              <EuiText size="xs">{edition}</EuiText>
            </EuiSkeletonTitle>
            <EuiSpacer size="xs" />
            <EuiSkeletonTitle isLoading={isLoading} size="xs">
              <EuiText size="xs">{subject}</EuiText>
            </EuiSkeletonTitle>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexGrid>
    </EuiCard>
  );
};

export default RecordSearchResultItem;

const PLACEHOLDER_IMAGE_URL =
  "data:image/png;base64,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";

function hasAttachments(
  openedRecord?: OpenBiblivreBibliographicRecord
): openedRecord is OpenBiblivreBibliographicRecord & boolean {
  return (openedRecord?.attachments?.length ?? 0) > 0;
}
