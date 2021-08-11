import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import styled from "styled-components";
import logo from "../../public/assets/img/svg/manual-symbol.svg";

const Style = styled.div`
  .header_wrapper {
    background: url("../../../assets/img/hair-cat-header.jpg");
    width: 100%;
    height: auto;
    padding-bottom: 10vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .header_center {
    width: 90%;
    margin: 0 auto;
    padding-top: 30px;
  }

  .header_content {
    display: flex;
    flex-direction: column;
    margin-top: 104px;
  }

  .header_content h1 {
    color: #0c3c3d;
    font-size: 82px;
    line-height: 98px;
    letter-spacing: 0px;
    font-weight: 800;
  }

  p {
    margin-top: 22px;
    width: 400px;
    line-height: 26px;
    font-size: 18px;
    letter-spacing: 0;
    font-weight: 400;
    color: #0c3c3d;
  }
`;

function Hero({ setModalIsOpen }) {
  const openQuiz = () => {
    setModalIsOpen(true);
  };
  return (
    <Style>
      <div className="header_wrapper">
        <div className="header_center">
          <Image src={logo} alt="manual logo" />
          <div className="header_content">
            <h1>
              BE GOOD
              <br />
              TO YOURSELF
            </h1>

            <p className={styles.description}>
              We’re working around the clock to bring you a holistic approach to
              your wellness. From top to bottom, inside and out.
            </p>
            <button className={styles.button} onClick={openQuiz}>
              TAKE THE QUIZ
            </button>
          </div>
        </div>
      </div>
    </Style>
  );
}

export default Hero;
