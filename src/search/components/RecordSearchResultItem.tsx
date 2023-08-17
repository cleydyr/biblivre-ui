import {
  EuiAvatar,
  EuiBadge,
  EuiButtonEmpty,
  EuiCard,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHealth,
  EuiI18n,
  EuiImage,
  EuiSkeletonRectangle,
  EuiSkeletonTitle,
  EuiSpacer,
  EuiText,
  useEuiI18n,
} from "@elastic/eui";
import { OpenBiblivreBibliographicRecord, type BiblioRecord } from "../types";
import { useEffect, useState } from "react";
import { BibliographicSearchAPI } from "../api/search";

type RecordSearchResultItemPropos = {
  record: BiblioRecord;
  isLoading: boolean;
  onClick: (openedRecord?: OpenBiblivreBibliographicRecord) => void;
  onAddToExport: () => void;
  api: BibliographicSearchAPI;
};

const IMAGE_SIZE = 320;

type RecordSearchResultItemState = {
  imageURL: string;
  isLoadingCover: boolean;
  openedRecord?: OpenBiblivreBibliographicRecord;
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
    imageURL: "",
    isLoadingCover: true,
  };

  const [state, setState] = useState(initialState);

  const edition = json?.["250"]?.[0]?.["a"]?.[0];

  const { imageURL, isLoadingCover, openedRecord } = state;

  useEffect(() => {
    Promise.all([
      fetch(`https://loremflickr.com/${IMAGE_SIZE}/${IMAGE_SIZE}/book`),
      api.open(recordId),
    ])
      .then(([response, openedRecord]) =>
        Promise.all([response.blob(), Promise.resolve(openedRecord)])
      )
      .then(([blob, { data: openedRecord }]) => {
        setState({
          ...state,
          imageURL: URL.createObjectURL(blob),
          openedRecord,
          isLoadingCover: false,
        });
      });
  }, [recordId]);

  return (
    <EuiCard
      onClick={() => onClick(openedRecord)}
      image={
        <EuiFlexGroup justifyContent="center">
          <EuiSkeletonRectangle
            isLoading={isLoadingCover || isLoading}
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
          >
            {imageURL === "" ? (
              <EuiAvatar size="xl" type="space" name={author ?? ""} />
            ) : (
              <EuiImage size={IMAGE_SIZE} src={imageURL} alt="capa" />
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
