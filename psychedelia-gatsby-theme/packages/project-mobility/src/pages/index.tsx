import React, { useState } from "react";
import Layout from "../layouts/layout";
import { Burger, Menu } from "../components";

const index = () => {
  const [open, setOpen]: [boolean, Function] = useState(false);

  return (
    <>
      <Layout>
        <div>
          <Menu open={open} setOpen={setOpen}></Menu>
          <Burger open={open} setOpen={setOpen}></Burger>
        </div>
      </Layout>
    </>
  );
};

export default index;
