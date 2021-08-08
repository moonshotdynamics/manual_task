import React, { useState, useEffect } from "react";
import {
  Modal,
  Wrapper,
  Title,
  Button,
  ButtonCancel,
  Content,
} from "./modal.styled";
import Backdrop from "./backdrop";
import Question from "../question/question";

function Popup({ show, modalClosed, title, content }) {
  const [index, setIndex] = useState(0);
  const [arrLength, setArrLength] = useState();
  const [prevButton, setPrevButton] = useState("Cancel");

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
          <div>
            <Title>{title}</Title>
          </div>
          <Content>{<Question content={content} index={index} />}</Content>
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
                  alert("Submit");
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
