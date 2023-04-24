import React from "react";
import styles from "@/styles/loading.module.css";
import Image from "next/image";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const Loading = () => {
  const back: any = useRef();
  useEffect(() => {
    gsap.to(back.current, {
      opacity: 0,
      duration: 1,
      delay: 7,
      display: "none",
    });
  }, []);
  return (
    <div className={styles.loading} ref={back}>
      <div className={styles.loadContent}>
        <Image src="/img (9).svg" alt="" width={22} height={18} />
        <h1>Hi, I’m Fawaz...</h1>
      </div>
    </div>
  );
};

export default Loading;
