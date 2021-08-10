import React, { useState, useEffect } from "react";
import {
  Modal,
  Wrapper,
  Title,
  Button,
  ButtonCancel,
  Content,
  Close,
} from "./Modal.styled";
import Backdrop from "./Backdrop";
import Question from "../question/Question";
import { FaRegWindowClose } from "react-icons/fa";
import Answer from "../answer/Answer";

function Popup({
  show,
  modalClosed,
  title,
  content,
  selected,
  setSelected,
  quizStatus,
  setQuizStatus,
  index,
  setIndex,
}) {
  // const [index, setIndex] = useState(0);
  const [arrLength, setArrLength] = useState();
  const [prevButton, setPrevButton] = useState("Cancel");
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [quizResult, setQuizResult] = useState();

  useEffect(() => {
    const length = content.questions.length;
    setArrLength(length - 1);
  });

  const incIndex = () => {
    if (index < arrLength) {
      setIndex(index + 1);
    }
  };

  const decIndex = () => {
    if (index >= 0) {
      setIndex(index - 1);
    }
    setPrevButton("Cancel");
  };

  return (
    <>
      <Backdrop show={show} onHide={modalClosed} />
      <Modal
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? 1 : 0,
        }}
      >
        <Wrapper>
          <Close onClick={modalClosed}>
            <FaRegWindowClose />
          </Close>
          <div>
            <Title>{title}</Title>
          </div>
          <Content>
            {quizStatus === "untouched" || quizStatus === "busy" ? (
              <Question
                content={content}
                setQuizStatus={setQuizStatus}
                index={index}
                select={selected}
                setSelected={setSelected}
                setQuizResult={setQuizResult}
              />
            ) : (
              <Answer quizResult={quizResult} />
            )}
          </Content>
          <div className="box-footer">
            {index === 0 ? (
              <ButtonCancel onClick={modalClosed}>Cancel</ButtonCancel>
            ) : (
              <ButtonCancel onClick={decIndex}> Previous</ButtonCancel>
            )}

            {index < arrLength ? (
              <Button
                onClick={() => {
                  incIndex();
                }}
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setQuizStatus("finished");
                }}
              >
                Submit
              </Button>
            )}
          </div>
        </Wrapper>
      </Modal>
    </>
  );
}

export default Popup;
