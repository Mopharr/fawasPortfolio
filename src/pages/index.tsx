import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Loading from "@/components/loading";
import Nav from "@/components/Nav";
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsFillArrowUpRightCircleFill,
} from "react-icons/bs";
import { AiFillLinkedin, AiFillBehanceSquare } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ mode, handleMode }: any) {
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
          <Loading />
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

            <div className={styles.headerContent}>
              {mode ? (
                <Image
                  src="/darkZig.svg"
                  alt=""
                  width={20}
                  height={22}
                  className={styles.zig}
                />
              ) : (
                <Image
                  src="/zig.svg"
                  alt=""
                  width={20}
                  height={22}
                  className={styles.zig}
                />
              )}

              <div className={styles.starrCon}>
                {mode ? (
                  <Image
                    src="/darkStar.svg"
                    alt=""
                    width={52}
                    height={22}
                    className={styles.sideStar}
                  />
                ) : (
                  <Image
                    src="/starr.svg"
                    alt=""
                    width={52}
                    height={22}
                    className={styles.sideStar}
                  />
                )}
              </div>

              <div
                className={`${
                  mode ? styles.darkHeaderContent : styles.headerText
                }`}
              >
                <div className={styles.title}>
                  <h3>Hi, I’m Fawaz.</h3>
                  <Image src="/wace.svg" alt="" width={40} height={40} />
                </div>
                <h1>
                  I Design, Listen To Hip-Hop, Speak Up For{" "}
                  <span className={styles.line}> Users</span>{" "}
                  <span className={styles.back}>People</span> That Can’t
                  Speak...
                </h1>
                <p>
                  I am a Product designer who loves to solve problems. I’m a
                  user-centered designer, who looks thoroughly into users’ minds
                  while attempting to solve their problems. I am passionate
                  about designing products that meet the business vision and
                  users’ goals, and I also believe in the aesthetic usability
                  phenomenon.
                </p>
              </div>
              {mode ? (
                <Image
                  src="/darkRound.svg"
                  alt=""
                  width={20}
                  height={22}
                  className={styles.round}
                />
              ) : (
                <Image
                  src="/img1.svg"
                  alt=""
                  width={20}
                  height={22}
                  className={styles.round}
                />
              )}
            </div>
            {mode ? (
              <Image
                src="/darkRing.svg"
                alt=""
                width={20}
                height={22}
                className={styles.ring}
              />
            ) : (
              <Image
                src="/ring.svg"
                alt=""
                width={20}
                height={22}
                className={styles.ring}
              />
            )}
          </header>
          <h2 className={styles.headerLast}>
            THAT LAGOS ISLAND BOY THAT DESIGNS AWESOME STUFF
          </h2>

          <section className={`${mode ? styles.workAct : styles.work}`}>
            <h1>Work</h1>

            <div className={styles.workCap}>
              <div className={styles.workCon}>
                <div className={styles.workConFirst}>
                  <div className={styles.workTitle}>
                    <h2>Scoop</h2>
                    <BsFillArrowUpRightCircleFill className={styles.workIcon} />
                  </div>
                  <p>
                    Scoop is an iOS app, it serves its users, up-to-date global
                    news or happenings (visually & auditorily) based on the
                    users’ interests...
                  </p>
                  <button>Product Design</button>
                </div>
              </div>
              <Image src="/img7.svg" width={22} height={22} alt="" />
            </div>
            <div className={styles.workCap}>
              <div className={styles.workCon}>
                <div className={styles.workConSec}>
                  <Image src="/ring2.svg" width={22} height={22} alt="" />
                </div>
                <div className={styles.workConFirst}>
                  <div className={styles.workTitle}>
                    <h2>Scoop</h2>
                    <BsFillArrowUpRightCircleFill className={styles.workIcon} />
                  </div>
                  <p>
                    Scoop is an iOS app, it serves its users, up-to-date global
                    news or happenings (visually & auditorily) based on the
                    users’ interests...
                  </p>
                  <button>Research</button>
                </div>
              </div>
              <Image src="/img5.svg" width={22} height={22} alt="" />
            </div>
            <div className={styles.workCap}>
              <div className={styles.workCon}>
                <div className={styles.workConFirst}>
                  <div className={styles.workTitle}>
                    <h2>Scoop</h2>
                    <BsFillArrowUpRightCircleFill className={styles.workIcon} />
                  </div>
                  <p>
                    Scoop is an iOS app, it serves its users, up-to-date global
                    news or happenings (visually & auditorily) based on the
                    users’ interests...
                  </p>
                  <button>UI Design</button>
                </div>
              </div>
              <Image src="/img4.svg" width={22} height={22} alt="" />
            </div>
          </section>

          <div className={styles.conCov}>
            <div className={`${mode ? styles.conAct : styles.connect}`}>
              <Image
                src="/img3.svg"
                width={22}
                height={22}
                alt=""
                className={styles.conImage}
              />
              <h1>Let&apos;s Connect</h1>
              <p>
                Get in touch for opportunities or say hi if you would love to
                collaborate.
              </p>
              <div className={styles.social}>
                <AiFillLinkedin className={styles.socialIcon} />
                <MdEmail className={styles.socialIcon} />
                <AiFillBehanceSquare className={styles.socialIcon} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
