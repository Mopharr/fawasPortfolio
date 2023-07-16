import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Nav = ({mode}: any) => {
  return (
    <div className={`${mode ? styles.navAct : styles.nav}`}>
      <Link href="/">Fawas.</Link>
      <ul className={styles.navItem}>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
