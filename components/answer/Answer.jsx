import React from "react";
import styled from "styled-components";

const Style = styled.div`
  .quizResult {
    display: flex;
    justify-content: center;
    font-size: 48px;
    font-weight: medium;
    color: #0c3c3d;
  }
  .a {
    font-size: 24px;
  }

  .p {
    font-size: 24px;
    color: #0c3c3d;
  }
`;

function Answer({ quizResult }) {
  if (quizResult === "yes") {
    return (
      <Style>
        <div className="quizResult">
          <p>
            Great news! We have the perfect treatment for your hair loss.
            Proceed to{" "}
            <a
              href="https://www.manual.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.manual.co
            </a>
            , and prepare to say hello to your new hair!
          </p>
        </div>
      </Style>
    );
  }

  if (quizResult === "no") {
    return (
      <Style>
        <div className="quizResult">
          <p>
            Unfortunately, we are unable to prescribe this medication for you.
            This is because finasteride can alter the PSA levels, which maybe
            used to monitor for cancer. You should discuss this further with
            your GP or specialist if you would still like this medication.
          </p>
        </div>
      </Style>
    );
  }
  return <> </>;
}

export default Answer;
