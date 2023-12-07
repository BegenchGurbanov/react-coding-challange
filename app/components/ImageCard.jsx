"use client"; // use client-side rendering

import Image from "next/image";

function ImageCard() {
  return (
    <div>
      <Image
        src={
          "https://unsplash.com/photos/a-snow-covered-road-surrounded-by-tall-pine-trees-y15WUAnF2Mk"
        }
        alt={"Placeholder"}
        width={800}
        height={600}
        objectFit="contain"
        objectPosition="center"
        className="rounded"
      />
    </div>
  );
}

export default ImageCard;
