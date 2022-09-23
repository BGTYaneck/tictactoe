import React from "react";

export const ResetButton = ({ resetBoard }) => {
  return (
    <button className="reset-button" onClick={resetBoard}>
      Reset
    </button>
  );
};
