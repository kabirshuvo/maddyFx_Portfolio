import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define type for individual image data
type ImageData = {
  id: number;
  src: string;
  alt: string;
  description: string;
  link: string;
};

interface ImageCardProps {
  image: ImageData;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div className="bg-gray-100 p-4 flex flex-col justify-between transform hover:rotate-3 transition-transform duration-500 ease-in-out rounded-lg">
      <div className=" ">
        <Image
          className="rounded-lg"
          src={image.src}
          alt={image.alt}
          width="250"
          height="250"
          sizes="100vw"
          // objectFit="cover"
        />
      </div>
    </div>
  );
};

export default ImageCard;
