import { ADD_BOOKS, DELETE_BOOK, DELETE_ALLBOOKS } from "../constants";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  book: [],
};

const helperAddData = (action) => {
  return {
    id: uuidv4(),
    title: action.payload.title,
    author: action.payload.author,
  };
};

const removeDataById = (state, id) => {
  const books = state.filter((book) => book.id !== id);
  return books;
};

// REDUCER
const reducerAddBooks = (state = initialState.book, action) => {
  if (localStorage.getItem("booksData")) {
    state = JSON.parse(localStorage.getItem("booksData"));
  }

  switch (action.type) {
    case ADD_BOOKS:
      state = [...state, helperAddData(action)];
      localStorage.setItem("booksData", JSON.stringify(state));
      return state;

    case DELETE_BOOK:
      state = removeDataById(state, action.payload);
      localStorage.setItem("booksData", JSON.stringify(state));
      return state;

    case DELETE_ALLBOOKS:
      state = [];
      localStorage.setItem("booksData", JSON.stringify(state));
      return state;

    default:
      return state;
  }
};

export default reducerAddBooks;
