export const getBooksList = async (searchTerm = "") => {
  console.log("*****im in getbook list");
  console.log("i received search term, ", searchTerm);
  if (searchTerm !== "") {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm
    );
    if (!response.ok) {
      throw new Error("Failed to fetch the books");
    }
    const data = await response.json();
    console.log("sending to display results");
    console.log(data);
    return data;
  }
};
