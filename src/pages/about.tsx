import React from "react";
import Loading from "@/components/loading";
import Nav from "@/components/Nav";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/about.module.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillBehanceSquare } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <>
      <Head>
        <title>Omo Ologo</title>
        <meta name="description" content="omo ologo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.mainCon}>
          <Nav />

          <header className={styles.header}>
            <div className={styles.mode}>
              <BsFillSunFill className={styles.modeIcon} />
              <BsFillMoonFill className={styles.modeIcon} />
            </div>

            <div className={styles.about}>
              <div className={styles.aboutText}>
                <h2>As it happens, raised in Lagos, Nigeria.</h2>
                <p>
                  Hi, My name is Fawaz, nicknamed “Loopy” I’ll give you $20 if
                  you could pronounce both names right, hahahaha.
                  <br />
                  <br />I was born and raised in{" "}
                  <span>Lagos Island, Lagos, Nigeria,</span> and I really do
                  love Lagos. I always say to myself, that I might probably get
                  a small “Lagos Island” tattoo, when Nigeria becomes a safer
                  and better place (to live freely without being harassed by the
                  police).
                  <br />
                  <br />
                  Basically, I started designing while I interned at
                  <span> Portfolio Advisor’s Limited,</span> Lagos, at year
                  2021, working on basic Graphics design stuff.
                  <br />
                  <br />
                  Also in 2021, I joined a community,{" "}
                  <span>(GDSC, KWASU Chapter, Nigeria)</span> launched for the
                  university techies, as a Product Design Track Member.
                  <br />
                  <br />
                  Also, I received a Bachelor’s Degree in Computer Science, from{" "}
                  <span>Kwara State University, Nigeria </span> (2021).
                  <br />
                  <br />
                </p>
              </div>
              <div className={styles.aboutImage}>
                <Image src="/Fram.svg" width={100} height={100} alt="" />
              </div>
            </div>

            <div className={styles.cont}>
              <p>
                I am a Product designer who loves to solve problems. I’m a
                user-centered designer, who looks thoroughly into users’ minds
                while attempting to solve their problems. I am passionate about
                designing products that meet the business vision and users’
                goals, and I also believe in the{" "}
                <span>aesthetic usability phenomenon.</span>
                <br />
                <br />
                Since my Product design career started. I’ve worked as a
                freelancer, as a contractor, and also as a fulltime product
                designer. Currently, I work as a product designer at{" "}
                <span> Zercom Systems</span>, a Software technology firm that
                develops and distributes technology solutions to organizations.
                I’m presently working on its prime products,{" "}
                <span>Tangerine LMS</span>
                (iterating on it for improvements in its usability) and
                <span>Terminoxx360</span> (building its mobile version).
                <br />
                <br />
                In this recent time, I see myself not just as a Product
                designer, but also a commentator, maybe because I observe a lot,
                and always express my opinion on things I see around me, on
                social media, and every other places.
              </p>
            </div>
          </header>
          <div className={styles.conCov}>
            <div className={styles.connect}>
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
};

export default About;
