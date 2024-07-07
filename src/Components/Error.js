import React from "react";

function Error({ message }) {
  return (
    <div className="w-full pt-8 flex items-center justify-center">
      <p className="text-2xl font-semibold">🛑 {message}</p>
    </div>
  );
}

export default Error;
