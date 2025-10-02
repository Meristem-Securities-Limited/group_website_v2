"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  fallback: StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallback,
  alt,
  width,
  height,
  className,
}) => {
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(src);

  return (
    <Image
      width={width}
      height={height}
      src={imageSrc}
      alt={alt}
      className={className}
      onError={() => setImageSrc(fallback)}
    />
  );
};

export default ImageWithFallback;
