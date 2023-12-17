"use client"; // use client-side rendering

import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

function ImageCard({ imgUrl, altDescription }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Image
        onClick={openModal}
        src={imgUrl}
        alt={altDescription}
        unoptimized="true"
        width={300}
        height={300}
        layout="responsive"
        loading="lazy"
        className="rounded"
      />

      {isModalOpen && (
        <ImageModal
          imgUrl={imgUrl}
          altDescription={altDescription}
          closeModal={closeModal}
        />
      )}
    </>
  );
}
export default ImageCard;
