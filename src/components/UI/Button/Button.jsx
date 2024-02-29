import React from "react";

export function Button(props) {
  const { children } = props;
  return (
    <div>
      <button
        type="button"
        key={number}
        onClick={() => onChange(number)}
        className={`page-number`}
      >
        {children}
      </button>
    </div>
  );
}
