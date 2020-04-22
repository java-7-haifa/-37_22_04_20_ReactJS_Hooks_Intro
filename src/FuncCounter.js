import React, { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);
  const [superCount, setSuperCount] = useState(100);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count - 1)}>dec</button>
      <button onClick={() => setCount(count + 1)}>inc</button>
      <h3>SuperCount: {superCount}</h3>
      <button onClick={() => setSuperCount(superCount - 1)}>dec</button>
      <button onClick={() => setSuperCount(superCount + 1)}>inc</button>
    </div>
  );
};
