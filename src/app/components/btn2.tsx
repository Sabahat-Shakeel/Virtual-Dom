"use client";
import { useState } from "react";
export default function Button2() {
  const [state1, setState] = useState(0);

  const handleClick1 = () => {
    setState(state1 - 3);
  };
  return (
    <div className="flex justify-center pt-4">
      <button
        className="text-white/80 bg-red-500 px-4 py-2 flex justify-center rounded-lg"
        onClick={handleClick1}
      >
        {" "}
        Minus 3 times: {state1}
      </button>
    </div>
  );
}
