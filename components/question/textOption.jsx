import React from "react";

function TextOption({ title, value }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}

export default TextOption;
