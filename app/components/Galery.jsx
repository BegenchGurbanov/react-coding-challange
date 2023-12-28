"use client";
import { useEffect, useState } from "react";
import { fetchImages } from "../utils/fetchData";
import ImageCard from "./ImageCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Galery() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchImages(currentPage);
        setImages([...images, ...data]); // rest operator for groups all remeaining properties inte new object (or named props)
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  //   handle scroll
  useEffect(() => {
    const handleScroll = () => {
      // console.log("you're at the bottom of the page new data will be fetched");
      if (
        document.documentElement.offsetHeight -
          (window.innerHeight + document.documentElement.scrollTop) <=
        5
      ) {
        setCurrentPage((prev) => prev + 1); // changed
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Event Target method is method that attaches an event handler (handlescroll) to window or my app

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className=" mx-auto px-2 py-2">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 200: 1, 768: 2, 1024: 4 }}
        >
          <Masonry gutter="10px">
            {images.map((image) => (
              <ImageCard
                key={image.id}
                imgUrl={image.urls.small}
                altDescription={image.alt_description}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}

export default Galery;
