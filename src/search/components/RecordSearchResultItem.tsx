import {
  EuiAvatar,
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
} from "@elastic/eui";
import { type BiblioRecord } from "../types";
import { useEffect, useState } from "react";

type RecordSearchResultItemPropos = {
  record: BiblioRecord;
  isLoading: boolean;
};

const IMAGE_SIZE = 320;

type RecordSearchResultItemState = {
  imageURL: string;
  isLoadingCover: boolean;
};

const RecordSearchResultItem = ({
  record,
  isLoading,
}: RecordSearchResultItemPropos) => {
  const initialState: RecordSearchResultItemState = {
    imageURL: "",
    isLoadingCover: true,
  };

  const [state, setState] = useState(initialState);

  const edition = record.json?.["250"]?.[0]?.["a"]?.[0];

  const { imageURL, isLoadingCover } = state;

  useEffect(() => {
    fetch(`https://loremflickr.com/${IMAGE_SIZE}/${IMAGE_SIZE}/book`)
      .then((response) => response.blob())
      .then(URL.createObjectURL)
      .then((url) => setState({ imageURL: url, isLoadingCover: false }));
  }, [record.id]);

  return (
    <EuiCard
      onClick={() => {}}
      image={
        <EuiFlexGroup justifyContent="center">
          <EuiSkeletonRectangle
            isLoading={isLoadingCover || isLoading}
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
          >
            {imageURL === "" ? (
              <EuiAvatar size="xl" type="space" name={record.author} />
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
        label: record.materialType,
      }}
      footer={
        <EuiSkeletonTitle isLoading={isLoading}>
          {record.holdingsAvailable > 0 ? (
            <EuiHealth color="success">{`${record.holdingsAvailable} disponíveis`}</EuiHealth>
          ) : (
            <EuiHealth color="danger">{`Indisponível (${record.holdingsReserved} reservas)`}</EuiHealth>
          )}
        </EuiSkeletonTitle>
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
