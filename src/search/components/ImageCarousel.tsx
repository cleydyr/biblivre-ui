// An image carousel with two buttons to navigate between images and a small navigation indicator at the bottom.

import {
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHealth,
  EuiImage,
} from "@elastic/eui";
import { useState } from "react";

type ImageCarouselProps = {
  imageUrls: Array<string>;
  height?: number;
  onError: () => void;
};

const calculateDotIndex = (imageIndex: number, imagesLength: number) => {
  if (imagesLength <= 5) {
    return imageIndex;
  }

  return Math.floor(imageIndex / (imagesLength / 5));
};

const ImageCarousel = ({ imageUrls, height, onError }: ImageCarouselProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const decreaseImageIndex = () => {
    setImageIndex((imageIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  const increaseImageIndex = () => {
    setImageIndex((imageIndex + 1) % imageUrls.length);
  };

  return (
    <EuiFlexGroup justifyContent="center" direction="column" gutterSize="xs">
      <EuiFlexItem>
        <EuiImage
          height={height}
          src={imageUrls[imageIndex]}
          alt={`${imageIndex}`}
          onError={onError}
        />
      </EuiFlexItem>
      <EuiFlexItem>
        {carouselController(
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
function carouselController(
  images: string[],
  imageIndex: number,
  decreaseImageIndex: () => void,
  increaseImageIndex: () => void
) {
  return (
    <EuiFlexGroup
      justifyContent="center"
      alignItems="center"
      style={{ visibility: images.length === 0 ? "hidden" : "visible" }}
    >
      <EuiFlexItem grow={false}>
        <EuiButtonIcon
          aria-label="Previous image"
          iconType="arrowLeft"
          onClick={decreaseImageIndex}
        />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiFlexGroup>
          {Array(Math.min(5, images.length))
            .fill(0)
            .map((_, i) => (
              <EuiHealth
                key={i}
                color={
                  i === calculateDotIndex(imageIndex, images.length)
                    ? "primary"
                    : "subdued"
                }
              />
            ))}
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
