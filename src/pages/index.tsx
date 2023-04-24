import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import styles from "@/styles/Home.module.css";
import Loading from "@/components/loading";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Omo Ologo</title>
        <meta name="description" content="omo ologo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Loading />
        <Nav />

        <header className={styles.header}>
          <Image src="" alt="" width={20} height={22} />
          <div className={styles.headerText}>
            <div className={styles.title}>
              <h3>Hi, I’m Fawaz.</h3>
              <Image src="" alt="" width={20} height={22} />
            </div>
            <h1>I Design, Listen To Hip-Hop, Speak Up
For Users People That Can’t Speak...</h1>
          </div>
        </header>
      </main>
    </>
  );
}
