import React from "react";
import Image from "next/image";

function ImageOption({ title, value }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}

export default ImageOption;
