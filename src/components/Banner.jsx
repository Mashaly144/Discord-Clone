import React from 'react';
import styles from '../style';
const Banner = () => {
  return (
    <div
      className={`${styles.BannerImg}  bg-cover bg-no-repeat bg-center h-[250px] rounded-[20px] flex justify-center items-center text-center`}
    >
      <h1
        className={` ${styles.heading} text-white font-poppins text-[28px] font-semibold backdrop-blur-md
      `}
      >
        Find Your Community <br /> On Discord
      </h1>
    </div>
  );
};

export default Banner;
