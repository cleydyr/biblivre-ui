// An image carousel with two buttons to navigate between images and a small navigation indicator at the bottom.

import {
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiImage,
} from "@elastic/eui";
import { ReactNode, useState } from "react";

type ImageCarouselProps = {
  imageUrls: Array<string>;
  width?: number;
  height?: number;
  errorPlaceHolder: ReactNode;
};

type ImageCarouselState = {
  imageIndex: number;
  isError: boolean;
};

const calculateDotIndex = (imageIndex: number, imagesLength: number) => {
  if (imagesLength <= 5) {
    return imageIndex;
  }

  return Math.floor(imageIndex / (imagesLength / 5));
};

const initialState: ImageCarouselState = {
  imageIndex: 0,
  isError: false,
};

const ImageCarousel = ({
  imageUrls,
  width,
  height,
  errorPlaceHolder,
}: ImageCarouselProps) => {
  const [state, setState] = useState(initialState);

  const { imageIndex, isError } = state;

  const decreaseImageIndex = () => {
    setState({
      isError: false,
      imageIndex: (imageIndex - 1 + imageUrls.length) % imageUrls.length,
    });
  };

  const increaseImageIndex = () => {
    setState({
      isError: false,
      imageIndex: (imageIndex + 1) % imageUrls.length,
    });
  };

  return (
    <EuiFlexGroup justifyContent="center" direction="column" gutterSize="xs">
      <EuiFlexItem>
        {isError ? (
          errorPlaceHolder
        ) : (
          <EuiImage
            height={height}
            width={width}
            style={{ objectFit: "scale-down" }}
            src={imageUrls[imageIndex]}
            alt={`${imageIndex}`}
            onError={() => setState({ ...state, isError: true })}
          />
        )}
      </EuiFlexItem>
      <EuiFlexItem>
        {carouselNavigation(
          imageUrls,
          imageIndex,
          decreaseImageIndex,
          increaseImageIndex
        )}
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default ImageCarousel;

function carouselNavigation(
  images: string[],
  imageIndex: number,
  decreaseImageIndex: () => void,
  increaseImageIndex: () => void
) {
  return (
    <EuiFlexGroup
      justifyContent="center"
      alignItems="center"
      style={{
        visibility: images.length === 1 ? "hidden" : "visible",
        background: "transparent",
      }}
    >
      <EuiFlexItem grow={false}>
        <EuiButtonIcon
          aria-label="Previous image"
          iconType="arrowLeft"
          onClick={decreaseImageIndex}
        />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiFlexGroup alignItems="center">
          {renderDots(imageIndex, images.length)}
        </EuiFlexGroup>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButtonIcon
          aria-label="Next image"
          iconType="arrowRight"
          onClick={increaseImageIndex}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
function renderDots(imageIndex: number, imagesLength: number): ReactNode {
  return Array(Math.min(5, imagesLength))
    .fill(0)
    .map((_, i) => {
      const isCurrent = i === calculateDotIndex(imageIndex, imagesLength);

      return (
        <EuiIcon
          key={i}
          size={isCurrent ? "m" : "s"}
          type={"dot"}
          color={isCurrent ? "primary" : "subdued"}
        />
      );
    });
}
