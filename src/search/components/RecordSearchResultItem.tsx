import {
  EuiBadge,
  EuiButton,
  EuiCard,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiFlexItem,
  EuiI18n,
  EuiIcon,
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
  onClick: (openedRecord?: OpenBiblivreBibliographicRecord) => void;
  onAddToExport: () => void;
  api: BibliographicSearchAPI;
};

const IMAGE_SIZE = 320;

type RecordSearchResultItemState = {
  isOpeningRecord: boolean;
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
  onClick,
  onAddToExport,
  api,
}: RecordSearchResultItemPropos) => {
  const initialState: RecordSearchResultItemState = {
    isOpeningRecord: true,
  };

  const [state, patchState] = usePartialState(initialState);

  const edition = json?.["250"]?.[0]?.["a"]?.[0];

  const { isOpeningRecord, openedRecord } = state;

  const subduedBackground = useEuiBackgroundColor("subdued");

  useAsyncEffect(async () => {
    patchState({ isOpeningRecord: true });

    const { data: openedRecord } = await api.open(recordId);

    patchState({
      openedRecord,
      isOpeningRecord: false,
    });
  }, [recordId]);

  return (
    <EuiCard
      image={renderCardImage(openedRecord, api, subduedBackground)}
      title={renderCardTitle(title)}
      titleElement="h4"
      textAlign="left"
      betaBadgeProps={{
        label: useEuiI18n(`marc.material_type.${materialType}`, "Book"),
      }}
      footer={renderCardFooter(
        isOpeningRecord,
        holdingsAvailable,
        onClick,
        openedRecord
      )}
    >
      {renderCardBody(author, publicationYear, edition, subject)}
    </EuiCard>
  );
};

export default RecordSearchResultItem;

function renderCardBody(
  author: string,
  publicationYear: string,
  edition: string,
  subject: string
) {
  return (
    <EuiFlexGrid>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiText>{author}</EuiText>
          <EuiSpacer size="xs" />
          <EuiText size="s">{publicationYear}</EuiText>
          <EuiSpacer size="xs" />
          <EuiText size="xs">{edition}</EuiText>
          <EuiSpacer size="xs" />
          <EuiText size="xs">{subject}</EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiFlexGrid>
  );
}

function renderCardImage(
  openedRecord: OpenBiblivreBibliographicRecord | undefined,
  api: BibliographicSearchAPI,
  subduedBackground: string
) {
  return (
    <EuiFlexGroup justifyContent="center" alignItems="center">
      {/* <EuiSkeletonRectangle
        width={IMAGE_SIZE - 3}
        height={IMAGE_SIZE}
        isLoading={isLoadingCover || isLoading}
      > */}
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
  );
}

function renderCardTitle(title: string) {
  return (
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
  );
}

function renderCardFooter(
  isOpeningRecord: boolean,
  holdingsAvailable: number,
  onClick: (openedRecord?: OpenBiblivreBibliographicRecord) => void,
  openedRecord: OpenBiblivreBibliographicRecord | undefined
) {
  return (
    <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
      <EuiBadge color={holdingsAvailable > 0 ? "primary" : "default"}>
        <EuiI18n
          token={`cataloging.holding.availability.${getAvailabilityKey()}`}
          default="?"
        />
      </EuiBadge>
      <EuiButton
        isLoading={isOpeningRecord}
        size="s"
        onClick={() => onClick(openedRecord)}
      >
        <EuiI18n
          token={
            isOpeningRecord
              ? "common.loading"
              : "search.bibliographic.open_item_button"
          }
          default="Open"
        />
      </EuiButton>
    </EuiFlexGroup>
  );

  function getAvailabilityKey() {
    return holdingsAvailable > 0 ? "available" : "unavailable";
  }
}

function imagePlaceholder(background: string) {
  return (
    <EuiFlexGroup
      style={{ height: 320, background: background }}
      alignItems="center"
      justifyContent="center"
    >
      <EuiIcon type="questionInCircle" size="xxl" />
    </EuiFlexGroup>
  );
}

function hasAttachments(
  openedRecord?: OpenBiblivreBibliographicRecord
): openedRecord is OpenBiblivreBibliographicRecord {
  return (openedRecord?.attachments?.length ?? 0) > 0;
}
