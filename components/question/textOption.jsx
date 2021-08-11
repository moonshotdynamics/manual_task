import React, { useState } from "react";
import styled from "styled-components";
import Answer from "../answer/Answer";

const Style = styled.div`
  .answer {
    font-size: 24px;
    color: #0c3c3d;
    font-weight: bold;
    margin-bottom: 25px;
    /* padding-bottom: 25px; */

    &:hover {
      color: #34d1d1;
      cursor: pointer;
      border-bottom: 5px solid #34d1d1;
      margin: 0;
    }
  }

  .selected {
    border-bottom: 5px solid #34d1d1;
    margin: 0;
  }
`;

function TextOption({ value, selected }) {
  return (
    <Style>
      <div
        className={"answer" + (selected ? " selected" : "")}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </Style>
  );
}

export default TextOption;
