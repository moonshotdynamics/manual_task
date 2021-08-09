import React from "react";
import styled from "styled-components";

const Style = styled.div`
  .title {
    color: #0c3c3d;
    font-size: 36px;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    line-height: 48px;
  }
`;

function Main() {
  return (
    <Style>
      <div className="title">
        <h2>What we can help with</h2>
      </div>
    </Style>
  );
}

export default Main;
