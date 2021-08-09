import React, { useState, useEffect } from "react";
import QuestionOptions from "./QuestionOptions";
import styled from "styled-components";

const Style = styled.div`
  .answerList {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    justify-content: space-evenly;
  }

  .question {
    font-size: 24px;
    color: #0c3c3d;
    text-align: center;
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
        <h1 className="question">{questionBank[index].question}</h1>
      </div>
      <div className="answerList">
        {questionBank[index].options
          ? questionBank[index].options.map((option) => {
              //option is the object of
              const key = Object.keys(option)[0]; // use this to get the value below
              const value = option[key];
              return (
                <>
                  <QuestionOptions
                    key={value}
                    value={value} //Image url or Yes/No
                    title={key}
                    answer={option.value}
                    reject={option.isRejection}
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
