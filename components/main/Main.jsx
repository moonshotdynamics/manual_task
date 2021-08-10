import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Photo1 from "../../public/assets/img/hair-photo-1-2-x.jpg";
import Photo2 from "../../public/assets/img/sex-photo-1-2-x.jpg";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    color: #0c3c3d;
    font-size: 36px;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    line-height: 48px;
  }

  .zeroOne {
    position: absolute;
    top: 900px;
    right: 750px;
    margin: 1px 56px 0 262px;
    padding: 162px 167px 343px 218px;
    z-index: -2;
    font-weight: bold;
    font-style: normal;
    color: #eee;
    letter-spacing: normal;
    width: 473px;
    font-size: 427px;
    height: 520px;
  }

  .zeroTwo {
    position: absolute;
    top: 1400px;
    left: 300px;
    width: 559px;
    height: 520px;
    margin: 0 289px 0 0;
    padding: 185px 188px 139px 60px;
    font-size: 427px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #eee;
    z-index: -2;
  }

  .firstParent {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .secondParent {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 150px;
    margin-top: 60px;
  }

  .firstImage {
    position: fixed;
    height: 480px;
    width: 480px;
    object-fit: contain;
  }

 

  .heading {
    color: #34d1d1;
    font-size: 12px;
    letter-spacing: 2.4px;
  }

    .heading2 {
    color: #34d1d1;
    font-size: 12px;
    letter-spacing: 2.4px;
    text-align: right;
  }

  .subheading1 {
    width: 311px;
    height: 64px;
    /* margin: 195px 0 12px 80px; */
    font-family: Helvetica;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: normal;
    color: #0c3c3d;
  }

  .subheading2 {
    width: 311px;
    height: 64px;
    /* margin: 195px 0 12px 80px; */
    font-family: Helvetica;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: normal;
    color: #0c3c3d;
    text-align: right;

  }

  .textBody1 {
    width: 300px;
    height: 132px;
    /* margin: 12px 11px 118px 80px; */
    /* font-family: ; */
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.83;
    letter-spacing: normal;
    color: #0c3c3d;
  }

  .textBody2 {
      width: 300px;
      height: 132px;
      /* margin: 12px 11px 118px 80px; */
      /* font-family: ; */
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.83;
      letter-spacing: normal;
      color: #0c3c3d;
      text-align: right;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px;
  width: 100%;
  height: 100%;
  margin-left: 264px;
  margin-right: 236px;
`;

const SecondParent = styled.div`
  flex: 1;
  position: relative;
  margin-top: 50px;

  .secondImage {
    position: fixed;
    height: 480px;
    width: 480px;
    object-fit: contain;
    right: -800px;
  }

  h6 {
    margin-bottom: 17px;
    letter-spacing: 2.4px;
    font-weight: bold;
    font-size: 12px;
    margin-left: 200px;
    color: #34d1d1;
  }

  h5 {
    width: 311px;
    height: 64px;
    font-family: Helvetica;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: normal;
    text-align: right;
    color: #0c3c3d;
    margin-left: 135px;
  }

  p {
    width: 300px;
    height: 88px;
    margin: 12px 0 0 11px;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.83;
    letter-spacing: normal;
    text-align: right;
    color: #0c3c3d;
    margin-left: 135px;
  }

  h2 {
    position: absolute;
    top: -400px;
    left: 350px;
    z-index: -2;
    font-weight: bold;
    color: #eeeeee;
    letter-spacing: 0;
    width: 473px;
    font-size: 470px;
    height: 520px;
  }
`;

function Main() {
  return (
    <Style>
      <div className="title">
        <h2>What we can help with</h2>
      </div>
      <div className="firstParent">
        <Grid>
          <Image src={Photo1} className="firstImage" />
          <div>
            <h2 className="zeroOne">01</h2>
            <h6 className="heading">HAIR LOSS</h6>
            <h5 className="subheading1">
              Hair loss needn’t be irreversible. We can help!
            </h5>
            <p className="textBody1">
              Hair loss needn’t be irreversible. There’s a scientifically proven
              way that’s most effective in keeping and regrowing your hair. It’s
              all to do with blocking a pesky hormone called DHT. That’s the bad
              guy behind hair loss. And you can keep him at bay. The choice is
              yours.
            </p>
          </div>
        </Grid>
      </div>
      <SecondParent>
        <Grid>
          <div>
            <h2>02</h2>
            <h6>ERECTILE DYSFUNCTION</h6>
            <h5>Erections can be a tricky thing. But no need to feel down!</h5>
            <p>
              There are plenty of reasons why you might be having difficulty in
              the erection department. We can help you figure out possible
              reasons why. And prescribe a pill if needed.
            </p>
          </div>
          <Image src={Photo2} className="secondImage" />
        </Grid>
      </SecondParent>
    </Style>
  );
}

export default Main;
