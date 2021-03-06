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

function Question({ content, setQuizStatus, index, setQuizResult, setIndex }) {
  const [questionBank, setQuestionBank] = useState(content.questions);

  useEffect(() => {
    const parseQuestions = () => {
      let id = 0;
      let ans;
      for (const [index, value] of questionBank.entries()) {
        id += 1;
        value.id = id;
        for (const element in value.options) {
          ans = value.options[element].value;
          value.questionOption = ans;
        }
        if (value.options[0].display.includes("img")) {
          value.optionType = "img";
        } else if (
          value.options[0].display.includes("Yes") ||
          value.options[0].display.includes("No")
        ) {
          value.optionType = "text";
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
                    key={questionBank[index].id}
                    value={value} //Image url or Yes/No
                    title={key}
                    answer={option.isRejection}
                    type={questionBank[index].optionType}
                    setQuizStatus={setQuizStatus}
                    quizLength={questionBank.length}
                    index={index}
                    setQuizResult={setQuizResult}
                    id={questionBank[index].id}
                    setIndex={setIndex}
                    questionValue={questionBank[index].questionOption}
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
