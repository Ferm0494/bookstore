import React from 'react';
import PropTypes from 'prop-types';
import { BOOK_CATEGORIES } from '../../utils/const';

const BookForm = props => (
  <form>
    <label htmlFor="fname">Book Title:</label>
    <input type="title" id="fname" name="fname" />
    <label htmlFor="cars">Choose a car:</label>
    <select id="categories" name="bookCategories">
      {BOOK_CATEGORIES.map(book => (
        <option value={book}>{book}</option>
      ))}
    </select>
  </form>
);

BookForm.propTypes = {};

export default BookForm;
