import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from "../../styles/Home.module.css";
import styled from "styled-components";
import logo__footer from "../../public/assets/img/svg/manual-symblol.svg";

const Style = styled.div`
  .container {
    display: flex;
    background: #e5f5f4;
    width: 100%;
    height: 100%;
  }

  .footer {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #e5f5f4;
  margin-top: 30px;
  padding: 78px;
  position: relative;
  flex-direction: column;

  .logo {
    width: 80px;
    height: 75px;
    position: absolute;
    left: 78px;
    top: 78px;
  }
}

.footer__links {
  display: flex;
  margin-left: 250px;
}

.footer__link {
  display: flex;
  flex-direction: column;
  margin-left: 100px; //responsive low res bug

  &__title {
    color: $buttonColor;
    letter-spacing: 2.4px;
    font-family: $titleFont;
    font-weight: bold;
    font-size: 12px;
    padding-bottom: 17px;
  }

  a {
    font-size: 14px;
    line-height: 36px;
    letter-spacing: 0px;
    color: $titleColor;
    font-family: $parFont;
  }
}

.social_media_icons {
  display: flex;
}

.social_media_icons img {
  margin-top: 10px;
}

@media screen and (max-width: 1125px) {
  footer {
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 40px;

    .logo {
      display: none;
    }
  }

  .footer__links {
    margin: 0;
  }
}

.copyr {
  margin-top: 100px;
  color: rgba(108, 108, 108, 0.5);
  line-height: 22px;
  font-family: $sans;
  font-size: 12px;
}

.twt {
  margin: 0px 20px 0px 20px;
}

@media screen and (max-width: 819px) {
  .footer__link {
    padding-top: 1rem;
    margin-left: 0px; //responsive low res bug fix

    a,
    h3 {
      text-align: center;
    }
  }

  .social-media {
    margin-left: 40px;
  }

  .company-parent {
    margin: 0px 50px 0px 50px;
  }
}

@media screen and (max-width: 550px) {
  .footer__links {
    flex-direction: column;

    a,
    h3 {
      text-align: center !important;
    }
  }

  .footer__links {
    justify-content: center;
  }

  .social-media {
    align-items: center;
    margin-left: 0px;
  }
}

  }
`;

const UL = styled.ul`
  list-style: none;
`;

function Footer() {
  return (
    <Style>
      <footer>
        <img className="logo" src={logo__footer} alt="footer__logo" />

        <div className="footer__links">
          <div className="footer__link">
            <h3 className="footer__link__title">PRODUCT</h3>
            <a href="/">Popular</a>
            <a href="/">Trending</a>
            <a href="/">Guided</a>
            <a href="/">Products</a>
          </div>

          <div className="footer__link company-parent">
            <h3 className="footer__link__title">COMPANY</h3>

            <a href="/">Press Releases</a>
            <a href="/">Mission</a>
            <a href="/">Strategy</a>
            <a href="/">About</a>
          </div>

          <div className="footer__link">
            <h3 className="footer__link__title">INFO</h3>

            <a href="/">Support</a>
            <a href="/">Custom Service</a>
            <a href="/">Get Started Guide</a>
            <a href="/">Products</a>
          </div>

          <div className="footer__link social-media">
            <h3 className="footer__link__title">FOLLOW US</h3>

            <div className="social_media_icons">
              {/* <img src={fb} alt="facebook" />  */}
              <FaFacebookF />
              {/* <img className="twt" src={tw} alt="twitter" /> */}
              <FaTwitter />

              {/* <img src={inn} alt="linkedIn" /> */}
              <FaLinkedin />
            </div>
          </div>
        </div>

        <hr />

        <h6 className="copyr">© 2019 Manual. All rights reserved.</h6>
      </footer>
    </Style>
  );
}

export default Footer;
