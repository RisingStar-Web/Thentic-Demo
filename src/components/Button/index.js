import React from "react";

export default function Button({ name, onClick, className, ...rest }) {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-[#5663e9] py-3 px-5 rounded-md`}
      {...rest}
    >
      {name}
    </button>
  );
}
