"use client"; //For NextJS to detect that this code is for front-end
export const fetchImages = async (currentPage) => {
  console.log("fetching images for page: ", currentPage);
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/?per_page=30&page=${currentPage}&client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
// I used try/catch for to handle error that might occur during rendering or updating
