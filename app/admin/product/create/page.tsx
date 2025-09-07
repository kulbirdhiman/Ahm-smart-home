"use client";
import React, { useState } from "react";

import AddProduct from "@/components/admin/product/CreateProduct";

const Page = () => {
  const [values, setValues] = useState<Record<string, any>>(
 []
  );

  return (
    <div className="">
      <AddProduct values={values} setValues={setValues} />
    </div>
  );
};

export default Page;
