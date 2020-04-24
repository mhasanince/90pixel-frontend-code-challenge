import React, { useState } from 'react';
import Head from 'next/head';
import Styles from '../styles/layout.module.css';
import Link from 'next/link';

export default function Layout({ children }) {
  const [search, setSearch] = useState('');
  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };
  return (
    <div className={Styles.container}>
      <header>
        <nav className={Styles.navbar}>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            />
          </Head>
          <Link href="/">
            <a className={Styles.logo}>
              <h3>Movie Search App</h3>
            </a>
          </Link>
          <div className={Styles.search}>
            <input
              type="text"
              placeholder="Basic search bar. Enter any film title"
              value={search}
              onChange={handleChange}
            />
            <Link href="/search/[search]" as={`/search/${search}`}>
              <a className="button">Search</a>
            </Link>
          </div>
          <a
            className={Styles.github}
            href="https://github.com/mhasanince"
            target="_blank"
          >
            github/mhasanince
          </a>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
