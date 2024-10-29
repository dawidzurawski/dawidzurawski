// Button.tsx
import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-purple-700 text-white py-2 px-4 rounded hover:bg-lime-600 disabled:bg-gray-400 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
