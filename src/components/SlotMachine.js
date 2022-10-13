import React from "react";

const SlotMachine = (props) => {
  //   const x = "😀";
  //   const y = "😀";
  // //   const z = "😀";
  //   const z = "😁";

    // console.log(props);

  //   const x = props.x;
  //   const y = props.y;
  //   const z = props.z;

  const { x, y, z } = props;

  return (
    <>
      <div>
        {x} {y} {z}
      </div>
      <div>{x === y && y === z ? "It is matched" : "It is not matched"}</div>
      <hr />
    </>
  );
};

export default SlotMachine;
