import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Answer from "../answer/Answer";
const Style = styled.div`
  .images {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    justify-content: space-evenly;

    &:hover {
      cursor: pointer;
      border: 1px solid #34d1d1;
      border-radius: 10px;
      transform: scale(1.1);
      transition: all 0.2s;
    }
  }

  .selected {
    border: 1px solid #34d1d1;
    border-radius: 10px;
  }
`;

function ImageOption({ title, value, reject, answer, setSelection }) {
  const [ans, setAns] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleSelectClick = () => {
    setSelected(true);
    setSelection(reject);
  };
  return (
    <Style>
      <div
        className={"images" + (selected ? " selected" : "")}
        dangerouslySetInnerHTML={{ __html: value }}
        onClick={handleSelectClick}
      />
    </Style>
  );
}

export default ImageOption;
