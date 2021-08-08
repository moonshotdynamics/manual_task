import React, { useState, useEffect } from "react";
import QuestionOptions from "./questionOptions";
import styled from "styled-components";

const Style = styled.div`
  .answerList {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
  }
`;

function Question({ content, index }) {
  const [quizComplete, setQuizComplete] = useState(false);
  const [questionBank, setQuestionBank] = useState(content.questions);

  useEffect(() => {
    const parseQuestions = () => {
      for (const question of questionBank) {
        if (question.options[0].display.includes("img")) {
          question.optionType = "img";
        } else if (
          question.options[0].display.includes("Yes") ||
          question.options[0].display.includes("No")
        ) {
          question.optionType = "text";
        }
      }
    };
    parseQuestions();
  }, []);

  return (
    <Style>
      <div>
        <h1>{questionBank[index].question}</h1>
      </div>
      <div className="answerList">
        {questionBank[index].options
          ? questionBank[index].options.map((option) => {
              const key = Object.keys(option)[0];
              const value = option[key];
              return (
                <>
                  <QuestionOptions
                    key={value}
                    value={value}
                    title={key}
                    type={questionBank[index].optionType}
                  />
                </>
              );
            })
          : null}
      </div>
    </Style>
  );
}

export default Question;
