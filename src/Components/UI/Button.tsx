// Button.tsx
import React from "react";

type ButtonProps = {
  title: string;
  to?: string;
  state?: any;
  action?: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, to, state, action }) => {
  const handleClick = () => {
    if (to) {
      if (state) {
        window.location.href = `${to}`;
      } else {
        window.location.href = `${to}`;
      }
    } else if (action) {
      action();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-48 h-12 bg-[#05141f] text-white flex items-center justify-center"
    >
      {title}
    </button>
  );
};

export default Button;
