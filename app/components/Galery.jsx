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
        setImages([...images, ...data]);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  //   handle scroll
  useEffect(() => {
    const handleScroll = () => {
      console.log("you're at the bottom of the page new data will be fetched");
      if (
        document.documentElement.offsetHeight -
          (window.innerHeight + document.documentElement.scrollTop) <=
        10
      ) {
        setCurrentPage(currentPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

  return (
    <>
      <div className="gap-4 my-6 px-8">
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
