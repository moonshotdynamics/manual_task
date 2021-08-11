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
    @media screen and (max-width: 1000px) {
      font-size: 24px;
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
  /* margin-left: 264px;
  margin-right: 236px; */
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FirstParent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 150px; */

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .firstImageParent {
    flex: 1;
    margin-left: 60%;

    @media screen and (max-width: 1000px) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .firstImage {
    height: 480px;
    width: 480px;
    object-fit: contain;

    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }

  h6 {
    color: #34d1d1;
    margin-bottom: 17px;
    letter-spacing: 2.4px;
    font-weight: bold;
    font-size: 12px;

    @media screen and (max-width: 1000px) {
      text-align: center;
      margin-top: 30px;
    }
  }

  h5 {
    margin-bottom: 12px;
    color: #0c3c3d;
    font-size: 22px;
    line-height: 32px;
    font-weight: 100;
    width: 250px;
    @media screen and (max-width: 1000px) {
      margin: 0;
      padding: 0;
      text-align: center;
      margin: 0 auto;
      margin-bottom: 2px;
    }
  }

  p {
    width: 300px;
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 0;
    font-weight: bold;
    color: #0c3c3d;
  }

  h2 {
    position: absolute;
    right: 650px;
    z-index: -2;
    font-weight: bold;
    color: #eeeeee;
    letter-spacing: 0;
    width: 473px;
    font-size: 470px;
    height: 520px;
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
`;

const SecondParent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  @media screen and (max-width: 1000px) {
    margin-right: 0;
    margin-top: 60px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .secondImageParent {
    flex: 1;
    margin-right: 50%;

    @media screen and (max-width: 1000px) {
      margin-right: auto;
      margin-left: auto;
      order: 1;
    }
  }

  .secondImage {
    height: 480px;
    width: 480px;
    object-fit: contain;

    @media screen and (max-width: 1000px) {
      width: 100%;
      order: 1;
    }
  }

  h6 {
    margin-bottom: 17px;
    letter-spacing: 2.4px;
    font-weight: bold;
    font-size: 12px;
    margin-left: 250px;
    color: #34d1d1;

    @media screen and (max-width: 1000px) {
      text-align: center;
      margin-left: 0px;
    }
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

    @media screen and (max-width: 1000px) {
      margin: 0;
      padding: 0;
      text-align: center;
      margin: 0 auto;
      margin-bottom: 30px;
      width: 250px;
      height: 64px;
    }
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
    margin-left: 145px;

    @media screen and (max-width: 1000px) {
      margin: 0;
      text-align: center;
      margin-bottom: 30px;
    }
  }

  h2 {
    position: absolute;
    top: 1150px;
    left: 550px;
    z-index: -2;
    font-weight: bold;
    color: #eeeeee;
    letter-spacing: 0;
    width: 473px;
    font-size: 470px;
    height: 520px;
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
`;

const FlexColumn = styled.div`
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 80px;
  @media screen and (max-width: 1000px) {
    justify-content: start;
    margin-left: auto;
    margin-right: auto;
  }
`;
const FlexColumn1 = styled.div`
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 40%;
  margin-right: 80px;
  @media screen and (max-width: 1000px) {
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

function Main() {
  return (
    <Style>
      <div className="title">
        <h2>What we can help with</h2>
      </div>
      <FirstParent>
        <Grid>
          <div className="firstImageParent">
            <Image src={Photo1} className="firstImage" />
          </div>

          <FlexColumn>
            <h2>01</h2>
            <h6>HAIR LOSS</h6>
            <h5>Hair loss needn’t be irreversible. We can help!</h5>
            <p>
              Hair loss needn’t be irreversible. There’s a scientifically proven
              way that’s most effective in keeping and regrowing your hair. It’s
              all to do with blocking a pesky hormone called DHT. That’s the bad
              guy behind hair loss. And you can keep him at bay. The choice is
              yours.
            </p>
          </FlexColumn>
        </Grid>
      </FirstParent>
      <SecondParent>
        <Grid>
          <FlexColumn1>
            <h2>02</h2>
            <h6>ERECTILE DYSFUNCTION</h6>
            <h5>Erections can be a tricky thing. But no need to feel down!</h5>
            <p>
              There are plenty of reasons why you might be having difficulty in
              the erection department. We can help you figure out possible
              reasons why. And prescribe a pill if needed.
            </p>
          </FlexColumn1>
          <div className="secondImageParent">
            <Image src={Photo2} className="secondImage" />
          </div>
        </Grid>
      </SecondParent>
    </Style>
  );
}

export default Main;
