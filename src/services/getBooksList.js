export const getBooksList = async (searchTerm = "", maxResults = 10) => {
  let startIndex = 0;

  if (searchTerm !== "") {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?key=AIzaSyBUbf1ThcRwXmLIJu4o38Ht-b39vSUnhxM&q=${searchTerm}&startIndex=${startIndex}&maxResults=${maxResults}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch the books");
    }
    const data = await response.json();

    return data;
  }
};
