import React, { useState } from "react";
import TextOption from "./TextOption";
import ImageOption from "./ImageOption";
import Answer from "../answer/Answer";

function QuestionOptions({ title, value, type, reject, answer }) {
  const [selection, setSelection] = useState(false);

  if (selection) {
    return <Answer quizResult={selection} />;
  }
  return (
    <div>
      {type === "img" ? (
        <ImageOption
          value={value}
          title={title}
          reject={reject}
          answer={answer}
          setSelection={setSelection}
        />
      ) : (
        <TextOption
          value={value}
          title={title}
          reject={reject}
          answer={answer}
          setSelection={setSelection}
        />
      )}
    </div>
  );
}

export default QuestionOptions;
