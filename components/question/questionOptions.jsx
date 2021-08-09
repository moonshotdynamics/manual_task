import React, { useState } from "react";
import TextOption from "./TextOption";
import ImageOption from "./ImageOption";
import Answer from "../answer/Answer";

function QuestionOptions({
  title,
  value,
  type,
  reject,
  answer,
  setQuizStatus,
  quizLength,
}) {
  const [selection, setSelection] = useState(null);
  const [count, setCount] = useState(1);

  const handleSelect = () => {
    setCount(count + 1);
    console.log(selection);
    console.log(count);
    if (selection) {
      //if selection is true, then
      setQuizStatus(false); //tells quiz that user is not a good fit
    }
    if (count === quizLength) {
      setQuizStatus(true);
    }
  };

  return (
    <div onClick={handleSelect}>
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
