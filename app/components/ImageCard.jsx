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
      <li className="w-full h-[500px]" onClick={openModal}>
        <div className="relative w-full h-full">
          <Image
            src={imgUrl}
            alt={altDescription}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded"
            loading="lazy"
          />
        </div>
      </li>
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
