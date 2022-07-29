import React, { Fragment, useState } from "react";

interface Props {
  children: (
    letter2: string,
    setLetter2: React.Dispatch<React.SetStateAction<string>>
  ) => JSX.Element | null;
  note: string;
}

const Message2: React.FC<Props> = ({ children, note }) => {
  const [letter2, setLetter2] = useState("A");
  console.log(note);
  return (
    <Fragment>
      {/* <div>{letter2}</div> */}
      <div>{children(letter2, setLetter2)}</div>
    </Fragment>
  );
};
export default Message2;
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
