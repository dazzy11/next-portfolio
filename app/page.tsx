import React from 'react';
import styles from './page.module.css';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap" rel="stylesheet" />
      </Head>

      <h1 className={styles.font1}>DEEPAK</h1>
      <p className={styles.caveat}>I’m a full-stack developer</p>
      <Link href="/content" passHref>
      <div className={styles.component} >
        <div className={styles.overlapGroup}>
          <span className={styles.buttonText}>Know more</span>
        </div>
      </div>
      </Link>
    </>
  );
};

export default Page;
