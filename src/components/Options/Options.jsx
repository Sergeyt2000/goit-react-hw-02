// import { useState } from "react";

export default function Options({ onUpdate, visibleReset, onReset }) {
  return (
    <div className="options">
      <button className="option" onClick={() => onUpdate("good")}>
        Good
      </button>
      <button className="option" onClick={() => onUpdate("neutral")}>
        Neutral
      </button>
      <button className="option" onClick={() => onUpdate("bad")}>
        Bad
      </button>
      {visibleReset && (
        <button className="option" onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
