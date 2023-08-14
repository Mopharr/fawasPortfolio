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
          <TbInnerShadowBottomLeftFilled className={styles.first} />
          <TbInnerShadowBottomLeftFilled  className={styles.second}/>
        </div>
        {/* <Image src="/img9.svg" alt="" width={22} height={18} /> */}
      </div>
    </div>
  );
};

export default Loading;
