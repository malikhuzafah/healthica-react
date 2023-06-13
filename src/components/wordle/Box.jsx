import React from "react";

const Box = ({ character, className }) => {
  return (
    <div
      className={className}
      style={{
        height: "50px",
        width: "50px",
        border: "1px solid black",
        borderRadius: "5px",
        margin: "2px",
        textAlign: "center",
        fontSize: "30px",
        textTransform: "uppercase",
      }}
    >
      <span>{character}</span>
    </div>
  );
};

export default Box;
