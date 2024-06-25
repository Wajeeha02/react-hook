import React, { useMemo, useState } from "react";
import { initialItems } from "./initialItems";

interface DemoProps {}

function MemoComponent({}: DemoProps) {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(() => items.find(item => item.isSelected), [items]);

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <h2>Selected Item: {selectedItem?.id}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MemoComponent;
