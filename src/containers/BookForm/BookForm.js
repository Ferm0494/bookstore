import React from 'react';
import { connect } from 'react-redux';
import { BOOK_CATEGORIES } from '../../utils/const';

const BookForm = () => (
  <form>
    <label htmlFor="title">
      Book Title:
      <input type="title" id="title" name="title" />
    </label>
    <label htmlFor="categories">
      Choose a car:
      <select id="categories" name="categories">
        {BOOK_CATEGORIES.map(book => (
          <option key={book + Date.now()} value={book}>
            {book}
          </option>
        ))}
      </select>
    </label>
  </form>
);

export default connect(null, null)(BookForm);
