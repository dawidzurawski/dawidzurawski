import React from "react";

const LetterHover = ({ text }) => {
  return (
    <span>
      {text.split("").map((char, index) => (
        <span key={index} className="hover:text-lime-400">
          {char}
        </span>
      ))}
    </span>
  );
};

export default LetterHover;
