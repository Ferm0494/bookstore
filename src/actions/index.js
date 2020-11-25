import { v4 as uuidv4 } from 'uuid';
import { DELETE_BOOK, CREATE_BOOK } from '../utils/const';

export const addBook = ({ book, category }) => ({
  type: CREATE_BOOK,
  payload: { id: uuidv4(), title: book, category },
});
export const removeBook = book => ({ type: DELETE_BOOK, payload: book });
