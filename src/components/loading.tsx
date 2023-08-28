import React from "react";
import styles from "@/styles/loading.module.css";
import Image from "next/image";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { TbInnerShadowBottomLeftFilled } from "react-icons/tb";

const Loading = () => {
  const back: any = useRef();
  useEffect(() => {
    gsap.to(back.current, {
      opacity: 0,
      duration: 1,
      delay: 10,
      display: "none",
    });
  }, []);
  return (
    <div className={styles.loading} ref={back}>
      <div className={styles.loadContent}>
        <h1>Just a few seconds please...</h1>
        <div className={styles.lons}>
          {/* <TbInnerShadowBottomLeftFilled  /> */}
        <Image src="/Star4.png" alt="" width={17} height={18} className={styles.first}/>
        <Image src="/Star4.png" alt="" width={17} height={18} className={styles.second}/>
          {/* <TbInnerShadowBottomLeftFilled  className={styles.second}/> */}
        </div>
      </div>
    </div>
  );
};

export default Loading;
