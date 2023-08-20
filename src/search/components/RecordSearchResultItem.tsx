import {
  EuiBadge,
  EuiButton,
  EuiCard,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiFlexItem,
  EuiI18n,
  EuiIcon,
  EuiSkeletonRectangle,
  EuiSkeletonTitle,
  EuiSpacer,
  EuiText,
  useEuiBackgroundColor,
  useEuiI18n,
} from "@elastic/eui";
import { OpenBiblivreBibliographicRecord, type BiblioRecord } from "../types";
import { BibliographicSearchAPI } from "../api/search";
import ImageCarousel from "./ImageCarousel";
import usePartialState from "../../hooks/usePartialState";
import useAsyncEffect from "../../hooks/useAsyncEffect";

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

  const [state, patchState] = usePartialState(initialState);

  const edition = json?.["250"]?.[0]?.["a"]?.[0];

  const { isLoadingCover, openedRecord } = state;

  const subduedBackground = useEuiBackgroundColor("subdued");

  useAsyncEffect(async () => {
    const { data: openedRecord } = await api.open(recordId);

    patchState({
      openedRecord,
      isLoadingCover: false,
    });
  }, [recordId]);

  return (
    <EuiCard
      image={
        <EuiFlexGroup justifyContent="center" alignItems="center">
          {/* <EuiSkeletonRectangle isLoading={isLoadingCover || isLoading}> */}
          {hasAttachments(openedRecord) ? (
            <ImageCarousel
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              imageUrls={openedRecord.attachments.map(({ uri }) =>
                api.attachmentURL(uri)
              )}
              errorPlaceHolder={imagePlaceholder(subduedBackground)}
            />
          ) : (
            imagePlaceholder(subduedBackground)
          )}
          {/* </EuiSkeletonRectangle> */}
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
            <EuiButton size="s" onClick={() => onClick(openedRecord)}>
              <EuiI18n
                token="search.bibliographic.open_item_button"
                default="Open"
              />
            </EuiButton>
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

function imagePlaceholder(background: string) {
  return (
    <EuiFlexGroup
      style={{ height: 320, background: background }}
      alignItems="center"
      justifyContent="center"
    >
      <EuiIcon type="questionInCircle" size="xxl" />;
    </EuiFlexGroup>
  );
}

function hasAttachments(
  openedRecord?: OpenBiblivreBibliographicRecord
): openedRecord is OpenBiblivreBibliographicRecord & boolean {
  return (openedRecord?.attachments?.length ?? 0) > 0;
}
