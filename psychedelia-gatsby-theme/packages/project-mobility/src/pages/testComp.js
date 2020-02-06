import React, { useState } from "react";

const TestComp = () => {
  const [refo, setRefp] = useState();
  console.log(refo);

  return <div ref={setRefp}>sss component</div>;
};

export default TestComp;
