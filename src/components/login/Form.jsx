"use client";
import React from "react";
import Logo from "../common/logo";

import { Input } from "antd";
import Link from "next/link";
function Form() {
  return (
    <div className="flex items-center justify-center h-screen flex-col ">
      <Logo />
      <form className="px-7 py-14 rounded-md shadow-custom border-customGray w-2/5 flex flex-col justify-center">
        <div className="mb-5">
          <label className="text-customGray">Email Address</label>
          <Input
            className="focus:border-customGray hover:border-customGray focus:ring-0 bg-transparent hover:bg-inherit text-xs px-3 py-2 focus:bg-transparent"
            placeholder="nouran@cyparta.com"
          />
        </div>
        <div>
          <label>Password</label>
          <Input.Password
            className="focus:border-customGray hover:border-customGray focus:ring-0 bg-transparent hover:bg-inherit text-xs px-3 py-2 focus:bg-transparent"
            placeholder="***********"
          />
        </div>
        <Link
          href="/Dashboard"
          className="bg-customGray mt-12 w-4/5 mx-auto py-2 text-white rounded-md text-center"
        >
          Login
        </Link>
      </form>
    </div>
  );
}

export default Form;
