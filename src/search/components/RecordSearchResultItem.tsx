import {
  EuiAvatar,
  EuiButtonEmpty,
  EuiCard,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHealth,
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
  record,
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

  const edition = record.json?.["250"]?.[0]?.["a"]?.[0];

  const { imageURL, isLoadingCover, openedRecord } = state;

  useEffect(() => {
    Promise.all([
      fetch(`https://loremflickr.com/${IMAGE_SIZE}/${IMAGE_SIZE}/book`),
      api.open(record.id),
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
  }, [record.id]);

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
              <EuiAvatar size="xl" type="space" name={record.author ?? ""} />
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
              {record.title.length < 70
                ? record.title
                : `${record.title.substring(0, 70)}...`}
            </EuiFlexItem>
          </EuiFlexGroup>
        )
      }
      titleElement="h4"
      textAlign="left"
      betaBadgeProps={{
        label: useEuiI18n(`marc.material_type.${record.materialType}`, "Book"),
      }}
      footer={
        <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
          <EuiSkeletonTitle isLoading={isLoading}>
            {record.holdingsAvailable > 0 ? (
              <EuiHealth color="success" textSize="xs">
                Disponível
              </EuiHealth>
            ) : (
              <EuiHealth color="danger" textSize="xs">
                Indisponível
              </EuiHealth>
            )}
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
              <EuiText>{record.author}</EuiText>
            </EuiSkeletonTitle>
            <EuiSpacer size="xs" />
            <EuiSkeletonTitle isLoading={isLoading} size="s">
              <EuiText size="s">{record.publicationYear}</EuiText>
            </EuiSkeletonTitle>
            <EuiSpacer size="xs" />
            <EuiSkeletonTitle isLoading={isLoading} size="xs">
              <EuiText size="xs">{edition}</EuiText>
            </EuiSkeletonTitle>
            <EuiSpacer size="xs" />
            <EuiSkeletonTitle isLoading={isLoading} size="xs">
              <EuiText size="xs">{record.subject}</EuiText>
            </EuiSkeletonTitle>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexGrid>
    </EuiCard>
  );
};

export default RecordSearchResultItem;
