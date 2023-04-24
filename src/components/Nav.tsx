import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link href="/">Fawas.</Link>
      <ul className={styles.navItem}>
        <li>
          <Link href="/">Work</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
