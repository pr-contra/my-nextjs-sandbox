import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste
          a impedit assumenda sapiente vero similique voluptatem neque pariatur.
          Deserunt laboriosam voluptates ab obcaecati dolores quo beatae sunt id
          quaerat.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste
          a impedit assumenda sapiente vero similique voluptatem neque pariatur.
          Deserunt laboriosam voluptates ab obcaecati dolores quo beatae sunt id
          quaerat.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
