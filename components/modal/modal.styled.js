import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  z-index: 500;
  background-color: white;
  width: 90%;
  /* border: 1px solid #ccc; */
  /* border-radius: 10px; */
  padding: 16px;
  /* left: 15%; */
  top: 100px;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  @media (min-width: 600px) {
    .Modal {
      width: 90%;
      /* left: calc(50% - 250px); */
    }
  }
`;

export const Content = styled.div`
  overflow: auto;
  max-height: 500px;
  font-size: 12px;
  background: white;
  p {
    text-align: left;
  }
  ul,
  li {
    line-height: 17px;
    text-align: left;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Wrapper = styled.section`
  .box-header {
    height: 85px;
    padding: 0px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #c7c7c7;
    @media (max-width: 600px) {
      height: 60px;
    }
    @media only screen and (orientation: landscape) and (max-device-height: 400px) {
      height: 40px;
    }
  }
  .box-content {
    @media (max-width: 600px) {
    }
  }
  .box-footer {
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #c7c7c7;
    @media (max-width: 900px) {
      height: 80px;
    }
    @media (max-width: 600px) {
      justify-content: space-around;
      height: 60px;
    }
    @media only screen and (orientation: landscape) and (max-device-height: 400px) {
      height: 40px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  line-height: 36px;
  color: 030303;
  @media (max-width: 900px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
    line-height: normal;
  }
`;

export const Button = styled.button`
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  width: 146px;
  height: 37.37px;
  font-style: normal;
  /* margin-right: 37.5px; */
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #34d1d1;
  color: white;
  mix-blend-mode: normal;
  letter-spacing: -0.055em;

  &:hover {
    background-color: #0c3c3d;
  }

  @media (max-width: 900px) {
    margin-right: 0em;
    font-size: 14px;
    width: 120px;
    height: 35px;
  }
  @media (max-width: 600px) {
    margin-right: 0em;
    font-size: 10px;
    width: 70px;
    height: 25px;
  }
`;
export const ButtonCancel = styled(Button)`
  background-color: transparent;
  border: 1px solid #b8e6e2;
  color: #b8e6e2;
  &:hover {
    color: white;
    border: none;
  }
`;
