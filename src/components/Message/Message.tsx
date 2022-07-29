import React, { useState } from "react";

interface Props {
  note: number;
}

const Message: React.FC<Props> = () => {
  const [letter, setLetter] = useState<number | null>(1);
  return <div>{letter}</div>;
};
export default Message;
// interface Props {
//   children: (
//     count: number,
//     setCount: React.Dispatch<React.SetStateAction<number>>
//   ) => JSX.Element | null;
// }
// const Counter: React.FC<Props> = ({ children }) => {
//   const [count, setCount] = useState(0);
//   return <div>{children(count, setCount)}</div>;
// };

// export default Counter;
