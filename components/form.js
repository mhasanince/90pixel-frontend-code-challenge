import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fillYears } from '../helpers/helpers';
import Styles from '../styles/form.module.css';

export default function From() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('2020');
  const [genre, setGenre] = useState('movie');
  const [link, setLink] = useState('');
  useEffect(() => {
    setLink(`/movie/${title}_${year}_${genre}`);
  });
  const handleTitle = (evt) => {
    setTitle(evt.target.value);
  };
  const handleYear = (evt) => {
    setYear(evt.target.value);
  };
  const handleGenre = (evt) => {
    setGenre(evt.target.value.toLowerCase());
  };
  return (
    <div className={Styles.form}>
      <h3 className={Styles.header}>Advanced Search</h3>
      <div className={Styles.formWrapper}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={handleTitle}
        />
        <select name="year" id="year" value={year} onChange={handleYear}>
          {fillYears()}
        </select>
        <select name="genre" id="genre" value={genre} onChange={handleGenre}>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
      </div>
      <Link href="/movie/[title]" as={link}>
        <a className={`${Styles.searchButton}`}>Search</a>
      </Link>
    </div>
  );
}
