import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from "../../styles/Home.module.css";
import styled from "styled-components";
import logo__footer from "../../public/assets/img/svg/manual-symbol.svg";
import Image from "next/image";
import Link from "next/link";

const Style = styled.div`

  .footer {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #e5f5f4;
  margin-top: 30px;
  padding: 78px;
  position: relative;
  flex-direction: column;

}

  .logo {
    width: 80px;
    height: 75px;
    position: absolute;
    left: 78px;
    top: 78px;
  }



.footerLinks {
  display: flex;
  margin-left: 250px;
}

.footerLink {
  display: flex;
  flex-direction: column;
  margin-left: 100px; 

  &__title {
    color: 
#34d1d1;
    letter-spacing: 2.4px;
    font-weight: bold;
    font-size: 12px;
    padding-bottom: 17px;

    @media screen and (max-width: 1000px) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  a {
    font-size: 14px;
    line-height: 36px;
    letter-spacing: 0px;
    color: 
#0c3c3d;
  }
}

.social_media_icons {
  display: flex;
;
}

.social_media_icons_img {
    margin: 0 15px auto 0; 
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

  .footerLinks {
    margin: 0;
  }
}

.copyr {
  margin-top: 100px;
  color: rgba(108, 108, 108, 0.5);
  line-height: 22px;
  font-size: 12px;
}

.twt {
  margin: 0px 20px 0px 20px;
}

@media screen and (max-width: 819px) {
  .footerLink {
    padding-top: 1rem;
       margin: auto

  
  }

  .social-media {
    margin-left: 40px;
  }

  .company-parent {
    margin: 0px 50px 0px 50px;
  }
}



@media screen and (max-width: 550px) {
  .footerLinks {
    flex-direction: column;

    a,
    h3 {
      text-align: center !important;
    }
  }

  .footerLinks {
    justify-content: center;
  }

  .social-media {
    align-items: center;
    margin-left: 0px;

    @media screen and (max-width: 1000px){
      margin-left: auto;
    }
  }
}

  }
`;

const FlexBox = styled.div`
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
`;

function Footer() {
  return (
    <Style>
      <div className="footer">
        <FlexBox>
          <Image className="logo" src={logo__footer} alt="footer__logo" />
          <div className="footerLink">
            <h3 className="footerLink__title">PRODUCT</h3>
            <Link href="/">Popular</Link>
            <Link href="/">Trending</Link>
            <Link href="/">Guided</Link>
            <Link href="/">Products</Link>
          </div>

          <div className="footerLink company-parent">
            <h3 className="footerLink__title">COMPANY</h3>

            <Link href="/">Press Releases</Link>
            <Link href="/">Mission</Link>
            <Link href="/">Strategy</Link>
            <Link href="/">About</Link>
          </div>

          <div className="footerLink">
            <h3 className="footerLink__title">INFO</h3>

            <Link href="/">Support</Link>
            <Link href="/">Custom Service</Link>
            <Link href="/">Get Started Guide</Link>
            <Link href="/">Products</Link>
          </div>

          <div className="footerLink social-media">
            <h3 className="footerLink__title">FOLLOW US</h3>

            <div className="social_media_icons">
              <div className="social_media_icons_img">
                <FaFacebookF />
              </div>
              <div className="social_media_icons_img">
                <FaTwitter />
              </div>
              <div className="social_media_icons_img">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </FlexBox>

        <hr />

        <h6 className="copyr">© 2019 Manual. All rights reserved.</h6>
      </div>
    </Style>
  );
}

export default Footer;
