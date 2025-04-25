// src/components/ui/button.js
import React from "react";

export const Button = ({ onClick, children, className }) => (
  <button
    onClick={onClick}
    className={`bg-blue-500 text-white rounded px-4 py-2 ${className}`}
  >
    {children}
  </button>
);
