import React from "react";
import TextOption from "./TextOption";
import ImageOption from "./ImageOption";

function QuestionOptions({ title, value, type }) {
  //   console.log(value);
  return (
    <div>
      {type === "img" ? (
        <ImageOption value={value} title={title} />
      ) : (
        <TextOption value={value} title={title} />
      )}
    </div>
  );
}

export default QuestionOptions;
