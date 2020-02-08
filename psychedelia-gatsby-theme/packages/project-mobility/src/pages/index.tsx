import React, { useState, useRef, Dispatch, SetStateAction } from "react";
import Layout from "../layouts/layout";
import { Burger, Menu } from "../components";
import { useOnClickOutside } from "../hooks";

const index = () => {
  const [open, setOpen]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const node = useRef<HTMLDivElement>();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <Layout>
        <div ref={node}>
          <Menu open={open} setOpen={setOpen}></Menu>
          <Burger open={open} setOpen={setOpen}></Burger>
        </div>
      </Layout>
    </>
  );
};

export default index;
