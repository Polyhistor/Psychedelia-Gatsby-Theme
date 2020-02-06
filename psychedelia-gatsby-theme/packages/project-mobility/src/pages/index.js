import React, { useState } from "react";
import Layout from "../layouts/layout";
import { Burger, Menu } from "../components";

const [open, setOpen] = useState(false);

const index = () => {
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
