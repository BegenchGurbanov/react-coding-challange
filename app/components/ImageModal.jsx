"use client"; // use client-side rendering
import React from "react";
import Image from "next/image";

function ImageModal({ imgUrl, altDescription, closeModal }) {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <div className="relative">
        <Image
          src={imgUrl}
          alt={altDescription}
          layout="intrinsic"
          width={800}
          height={600}
          objectFit="contain"
          objectPosition="center"
          className="rounded"
        />
        <button
          className="absolute top-4 right-4 bg-white rounded-full p-2"
          onClick={closeModal}
        >
          <Image width={15} height={15} src="/closeIcon.svg" alt="close-icon" />
        </button>
      </div>
    </div>
  );
}

export default ImageModal;
