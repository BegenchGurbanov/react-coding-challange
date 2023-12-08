"use client";
export async function fetchImages(currentPage) {
  console.log("fetching images for page: ", currentPage);
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/?per_page=30&page=${currentPage}&client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
