import React, { useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}
interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: () => void;
  fn2?: (bob: string) => string;
  obj?: {
    f1: string;
  };
  person?: Person;
}
interface TexTNode {
  text: string;
}
export const TextField: React.FC<Props> = ({ text }) => {
  const [count, setCount] = useState<number | null | undefined | string>(5);
  const [obj1, setObj1] = useState<{ text: string }>({ text: "hello" });
  const [objInterface, setObjInterface] = useState<TexTNode>({ text: "hello" });
  // setCount(5);
  // setCount("hello");
  // setObj1({ text: "whoa" });
  console.log(text);
  console.log(count);
  return (
    <div>
      <input />
    </div>
  );
};
