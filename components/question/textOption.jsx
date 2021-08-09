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
    }
  }

  .selected {
    border-bottom: 5px solid #34d1d1;
  }
`;

function TextOption({ title, value, reject, answer, setSelection }) {
  const [selected, setSelected] = useState(false);
  const handleSelectClick = () => {
    setSelected(true);
    setSelection(reject);
  };
  return (
    <Style>
      <div
        className={"answer" + (selected ? " selected" : "")}
        dangerouslySetInnerHTML={{ __html: value }}
        onClick={handleSelectClick}
      />
    </Style>
  );
}

export default TextOption;
