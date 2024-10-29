import React from "react";

interface LetterHoverProps {
  text: string;
}

const LetterHover: React.FC<LetterHoverProps> = ({ text }) => {
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
