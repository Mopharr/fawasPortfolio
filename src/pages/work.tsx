import React from "react";
import Loading from "@/components/loading";
import Nav from "@/components/Nav";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/work.module.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Work = ({ mode, handleMode }: any) => {
  return (
    <>
      <Head>
        <title>Omo Ologo</title>
        <meta name="description" content="omo ologo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${mode ? styles.mainActive : styles.main}`}>
        <div className={styles.mainCon}>
          <Nav mode={mode} />

          <header className={styles.header}>
            {mode ? (
              <div className={styles.darkModee}>
                <BsFillMoonFill
                  onClick={handleMode}
                  className={`${mode ? styles.modeActive : styles.modeIcon}`}
                />
                <BsFillSunFill
                  onClick={handleMode}
                  className={`${mode ? styles.modeIcon : styles.modeActive}`}
                />
              </div>
            ) : (
              <div className={styles.mode}>
                <BsFillMoonFill
                  onClick={handleMode}
                  className={`${mode ? styles.modeActive : styles.modeIcon}`}
                />
                <BsFillSunFill
                  onClick={handleMode}
                  className={`${mode ? styles.modeIcon : styles.modeActive}`}
                />
              </div>
            )}

            <div className="work">
              <h1>Scoop</h1>

              {/* <Image src="../" width={10} height={10} alt="" /> */}
            </div>
          </header>
        </div>
      </main>
    </>
  );
};

export default Work;
