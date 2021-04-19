import { DELETE_BOOK, CREATE_BOOK } from '../utils/const';
import initBooks from '../utils/data';

const bookReducer = (state = initBooks, { type, payload }) => {
  switch (type) {
    case DELETE_BOOK: {
      const { bookToDelete } = payload;
      const books = state.books
        .filter(book => book.id === bookToDelete.id && book.title === bookToDelete.title);

      return { ...state, books };
    }

    case CREATE_BOOK: {
      const newBooks = state.books.push(payload);
      return { ...state, books: newBooks };
    }

    default: {
      return state;
    }
  }
};

export default bookReducer;
