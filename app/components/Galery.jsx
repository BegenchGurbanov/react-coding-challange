"use client";
import { useEffect, useState } from "react";
import { fetchImages } from "../utils/fetchData";
import ImageCard from "./ImageCard";

function Galery() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  //console.log("images>>>>>", images);
  //   fetch images from the API and set the images state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchImages(currentPage);
        setImages([...images, ...data]);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  //   handle scroll
  useEffect(() => {
    // when user scrolls to the bottom of the page, fetch more images

    const handleScroll = () => {
      console.log("you're at the bottom of the page new data will be fetched");
      //   if (
      //     window.innerHeight + document.documentElement.scrollTop ===
      //     document.documentElement.offsetHeight
      //   ) {
      const hasReachedBottom =
        document.documentElement.offsetHeight -
          (window.innerHeight + document.documentElement.scrollTop) <=
        10;
      setCurrentPage(currentPage + 1);
      //setCurrentPage(currentPage + 1);
      // Show loading spinner and make fetch request to api
      //}
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // STYLES :https://tailwindcss.com/docs/grid-template-columns
  return (
    <ul
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 p-4 "
      style={{ height: "100%" }}
    >
      {/* for each image create an Image component */}
      {images.map((image) => (
        <ImageCard
          key={image.id}
          imgUrl={image.urls.small}
          altDescription={image.alt_description}
        />
      ))}
    </ul>
  );
}

export default Galery;
