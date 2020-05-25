import Axios from "axios";

const URL_STRING_TO_GET = "/api/v1/book/?page=";
const URL_STRING_TO_GET_BOOK_BY_ID = "/api/v1/book/bookDetail/";

const URL_STRING_TO_SEARCH = "/api/v1/book/searchBook/?keyword=";
const URL_STRING_TO_SORT_TITLE = "/api/v1/book/sortBookByTitle";
const URL_STRING_TO_SORT_DATE = "/api/v1/book/sortBookByDate";
const URL_STRING_TO_SORT_GENRE = "/api/v1/book/sortBookByGenre";
const URL_STRING_TO_SORT_AVAIL = "/api/v1/book/sortBookByAvail";
const URL_STRING_TO_BOOK_RETURN = "api/v1/book/getBookReturn";
const URL_STRING_TO_RETURN_BOOK_PROCESS = "api/v1/book/returnBook/";
const URL_STRING_TO_UPDATE = "/api/v1/book/updateBook/";
const URL_STRING_TO_DELETE = "api/v1/book/deleteBook/";

const URL_STRING_TO_ADD = "/api/v1/book/addBook";
const URL_STRING_TO_RENT_BOOK_PROCESS = "api/v1/book/rentBook/";

const idAdmin = localStorage.getItem("id");
const token = localStorage.getItem("KEY_TOKEN");

export const getAllBook = (page) => {
  return {
    type: "GET_BOOK",
    payload: Axios.get(URL_STRING_TO_GET + page, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Algernon",
        "User-token": idAdmin,
        "x-token": "barier " + token,
      },
    }),
  };
};

export const updateBook = (idbook, data) => {
  return {
    type: "UPDATE_BOOK",
    payload: Axios.patch(URL_STRING_TO_UPDATE + idbook, data),
  };
};

export const getBookById = (id) => {
  console.log("id in redux: ", id);
  return {
    type: "GET_BOOK_BY_ID",
    payload: Axios.get(URL_STRING_TO_GET_BOOK_BY_ID + id),
  };
};

export const searchBookTitle = (title) => {
  return {
    type: "SEARCH_BOOK",
    payload: Axios.get(URL_STRING_TO_SEARCH + title),
  };
};

export const sortBookByTitle = () => {
  return {
    type: "SORT_BOOK_TITLE",
    payload: Axios.get(URL_STRING_TO_SORT_TITLE),
  };
};
export const sortBookByDate = () => {
  return {
    type: "SORT_BOOK_DATE",
    payload: Axios.get(URL_STRING_TO_SORT_DATE),
  };
};
export const sortBookByGenre = () => {
  return {
    type: "SORT_BOOK_GENRE",
    payload: Axios.get(URL_STRING_TO_SORT_GENRE),
  };
};
export const sortBookByAvail = () => {
  return {
    type: "SORT_BOOK_AVAIL",
    payload: Axios.get(URL_STRING_TO_SORT_AVAIL),
  };
};

export const getAllBookReturn = () => {
  return {
    type: "GET_BOOK_RETURN",
    payload: Axios.get(URL_STRING_TO_BOOK_RETURN),
  };
};

export const rentBookProcess = (idbook) => {
  return {
    type: "RENT_BOOK_PROCESS",
    payload: Axios.patch(URL_STRING_TO_RENT_BOOK_PROCESS + idbook),
  };
};

export const returnBookProcess = (idbook) => {
  return {
    type: "RETURN_BOOK_PROCESS",
    payload: Axios.patch(URL_STRING_TO_RETURN_BOOK_PROCESS + idbook),
  };
};

export const addNewBook = (data) => {
  return {
    type: "POST_BOOK",
    payload: Axios.post(URL_STRING_TO_ADD, data),
  };
};

export const deleteBook = (idbook) => {
  return {
    type: "DELETE_BOOK",
    payload: Axios.delete(URL_STRING_TO_DELETE + idbook),
  };
};
