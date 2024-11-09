"use client";
import { useState } from "react";
export default function Button1() {
  const [state, setState] = useState(0);

  const handleClick = () => {
    setState(state + 3);
  };
  return (
    <div className="flex justify-center pt-64  ">
      <button
        className="text-white/80 bg-indigo-600 px-4 py-2 flex justify-center rounded-lg"
        onClick={handleClick}
      >
        {" "}
        Plus 3 times: {state}
      </button>
    </div>
  );
}
