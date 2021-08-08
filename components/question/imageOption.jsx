import React from "react";

function ImageOption({ title, value }) {
  return (
    <div>
      <h1>Hello</h1>
      <div dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}

export default ImageOption;
