import React from "react";
import { useAppContext } from "./contexts/context";
import { ChildrenA } from "./ChildrenA";
import { ChildrenB } from "./ChildrenB";
import { ChildrenC } from "./ChildrenC";

export const Parent = () => {
  const [count, setCount] = React.useState(0);
  const { state } = useAppContext();
  const { isActive } = state;

  const changeRandomCount = () => {
    setCount(Math.floor(Math.random() * 10));
  };

  console.log("re-rendering Parent");

  return (
    <div>
      <div>Parent</div>
      <button onClick={changeRandomCount} style={{ background: "#frfrfr" }}>
        random number - > {count} {isActive ? "ISACTIVE" : "FALSE"}
      </button>
      <div
        style={{
          background: "#000000",
          height: 1,
          width: "100%",
          marginTop: 4,
        }}
      />

      <ChildrenA />
      <ChildrenB />
      <ChildrenC />
    </div>
  );
};
