import React, { useState, useEffect } from "react";
import TextOption from "./TextOption";
import ImageOption from "./ImageOption";
import Answer from "../answer/Answer";

function QuestionOptions({
  title,
  value,
  type,
  answer,
  setQuizStatus,
  quizLength,
  setQuizResult,
  index,
  id,
}) {
  const [selected, setSelected] = useState(false);

  // useEffect(() => {
  //   const value = sessionStorage.getItem(id);
  //   console.log(value);
  //   setSelected(value);
  // }, []);

  const handleSelect = () => {
    setSelected(() => true);
    sessionStorage.setItem(id, answer);

    if (answer) {
      //if answer is true, then
      setQuizResult("no"); //tells quiz that user is not a good fit
      setQuizStatus("complete");
    }
    if (index + 1 === quizLength && !answer) {
      setQuizResult("yes");
      setQuizStatus("complete");
    }
  };

  return (
    <div onClick={handleSelect}>
      {type === "img" ? (
        <ImageOption
          value={value}
          title={title}
          answer={answer}
          selected={selected}
        />
      ) : (
        <TextOption
          value={value}
          title={title}
          answer={answer}
          selected={selected}
        />
      )}
    </div>
  );
}

export default QuestionOptions;
