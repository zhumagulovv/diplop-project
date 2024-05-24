import React from "react";
import { useNavigate } from "react-router-dom";

type ButtonType = {
  title: string;
  action?: () => void;
  to?: string;
};

const Button: React.FC<ButtonType> = ({ title, action, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (action) {
      action();
      console.log(action());
      alert(action());
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
