import React from "react";
import styled from "styled-components";

const Style = styled.div`
  .quizResult {
    font-size: 24px;
    font-weight: medium;
  }
  .a {
    font-size: 24px;
  }
`;

function Answer({ quizResult }) {
  console.log(quizResult);
  return (
    <Style>
      {quizResult ? (
        <p>
          Great news! We have the perfect treatment for your hair loss. Proceed
          to{" "}
          <a
            href="https://www.manual.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.manual.co
          </a>
          , and prepare to say hello to your new hair!
        </p>
      ) : (
        <p>
          Unfortunately, we are unable to prescribe this medication for you.
          This is because finasteride can alter the PSA levels, which maybe used
          to monitor for cancer. You should discuss this further with your GP or
          specialist if you would still like this medication.
        </p>
      )}
    </Style>
  );
}

export default Answer;
