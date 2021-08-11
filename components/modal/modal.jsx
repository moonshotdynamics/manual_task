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
  const [arrLength, setArrLength] = useState();
  const [prevButton, setPrevButton] = useState("Cancel");
  const [quizResult, setQuizResult] = useState();

  useEffect(() => {
    const length = content.questions.length;
    setArrLength(length - 1);
  });

  const decIndex = () => {
    if (index >= 0) {
      setIndex(index - 1);
      setQuizResult(null);
    }
    if (quizResult === "no") {
      setQuizResult(null);
      setQuizStatus("busy");
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
                setIndex={setIndex}
              />
            ) : (
              <Answer quizResult={quizResult} />
            )}
          </Content>
          <div className="box-footer">
            {index === 0 || quizResult === "yes" ? (
              <ButtonCancel onClick={modalClosed}>Cancel</ButtonCancel>
            ) : (
              <ButtonCancel onClick={() => decIndex()}>Previous</ButtonCancel>
            )}
          </div>
        </Wrapper>
      </Modal>
    </>
  );
}

export default Popup;
