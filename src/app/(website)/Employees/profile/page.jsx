"use client";
import DetailsInfo from "@/components/main/DetailsInfo";
import Info from "@/components/main/Info";
import Nav from "@/components/main/Nav";
import Path from "@/components/main/Path";
import React, { useState } from "react";

function page() {
  const [edit, setEdit] = useState(true);
  const [data, setData] = useState({});
  return (
    <div>
      <Nav />
      <Path />
      <Info setEdit={setEdit} edit={edit} data={data} />
      <DetailsInfo edit={edit} data={data} setData={setData} />
    </div>
  );
}

export default page;
