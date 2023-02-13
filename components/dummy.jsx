import React from "react";

const Dummy = () => {
  return (
    <div>
      <style jsx global>
        {`
          h1 {
            background-color: blue;
          }
        `}
      </style>
      <h1>Dummy Content</h1>
    </div>
  );
};

export default Dummy;
