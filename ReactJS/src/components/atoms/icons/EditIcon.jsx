import React from "react";

export const EditIcon = ({ width = 24, height = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-edit"
  >
    <path d="M11 4h2a2 2 0 0 1 2 2v2" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L7 20H3v-4L18.5 2.5z" />
  </svg>
);
