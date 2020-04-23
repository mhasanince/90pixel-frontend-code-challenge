import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Styles from '../styles/favorites.module.css';

export default function Favorites() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(() => {
      return localStorage.favorites ? JSON.parse(localStorage.favorites) : [];
    });
  }, []);
  const favorites = movies.map((favorite, idx) => {
    const { title, poster, year, type } = favorite;
    return (
      <div className={Styles.movie} key={idx}>
        <img src={poster} alt={title} />
        <Link
          href="/movie/[title]"
          as={`/movie/${title}-${year.replace('–', '')}-${type}`}
        >
          <a>
            <h4 className={Styles.title}>{title}</h4>
          </a>
        </Link>
        <div className={Styles.subInfo}>
          <p>{year}</p>
          <p>{type}</p>
        </div>
      </div>
    );
  });
  return (
    <div className={Styles.favorites}>
      <h3 className={Styles.header}>Favorites</h3>
      <div className={Styles.movies}>{favorites}</div>
    </div>
  );
}
