import Child from "./Child";
import React from "react";
import { Button } from "@mui/material";

const Parent = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>increment {count}</Button>
      <Child />
    </div>
  );
};

export default Parent;
