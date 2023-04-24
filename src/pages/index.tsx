import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Loading from "@/components/loading";
import Nav from "@/components/Nav";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

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
          <div className={styles.mode}>
            <BsFillSunFill className={styles.modeIcon} />
            <BsFillMoonFill className={styles.modeIcon} />
          </div>

          <div className={styles.headerContent}>
            <Image
              src="/zig.svg"
              alt=""
              width={20}
              height={22}
              className={styles.zig}
            />
            <div className={styles.headerText}>
              <div className={styles.title}>
                <h3>Hi, I’m Fawaz.</h3>
                <Image src="" alt="" width={20} height={22} />
              </div>
              <h1>
                I Design, Listen To Hip-Hop, Speak Up For{" "}
                <span className={styles.line}> Users</span>{" "}
                <span className={styles.back}>People</span> That Can’t Speak...
              </h1>
              <p>
                I am a Product designer who loves to solve problems. I’m a
                user-centered designer, who looks thoroughly into users’ minds
                while attempting to solve their problems. I am passionate about
                designing products that meet the business vision and users’
                goals, and I also believe in the aesthetic usability phenomenon.
              </p>
            </div>

            <Image
              src="/img1.svg"
              alt=""
              width={20}
              height={22}
              className={styles.round}
            />
          </div>
               <Image
              src="/img3.svg"
              alt=""
              width={20}
              height={22}
              className={styles.ring}
            />
          <h2>THAT LAGOS ISLAND BOY THAT DESIGNS AWESOME STUFF</h2>
        </header>
      </main>
    </>
  );
}
