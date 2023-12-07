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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
