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
    return (
      <div className={Styles.movie} key={idx}>
        <img src={favorite.poster} alt={favorite.title} />
        <Link
          href="/movie/[title]"
          as={`/movie/${favorite.title}-${favorite.year}-${favorite.type}`}
        >
          <a>
            <h4 className={Styles.title}>{favorite.title}</h4>
          </a>
        </Link>
        <div className={Styles.subInfo}>
          <p>{favorite.year}</p>
          <p>{favorite.type}</p>
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
