import React from "react";
import Job from "../assets/svgs/Job";
import Email from "../assets/svgs/Email";
import Edit from "../assets/svgs/Edit";

function Info({ edit, setEdit, data }) {
  console.log(data);
  return (
    <div className="mt-6 flex pb-10 border-b-2 border-notifyColor justify-between items-end">
      <div className="flex gap-4">
        <img
          className="h-[100px] w-[100px] rounded-md object-cover "
          src="/imgs/mariem.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between">
          <h1 className="text-[24px] font-bold">
            {data.First_Name || "Mariem"}
            {"  "}
            {data.Last_Name || "Aly"}
          </h1>
          <p className="flex gap-2 text-customBlack2">
            <span>
              <Job />
            </span>
            UX/UI DESIGNER
          </p>
          <p className="flex gap-2 text-customBlack2">
            <span>
              <Email />
            </span>
            {data.Email_Address || "mariam@gmail.com"}
            {/* mariam@gmail.com */}
          </p>
        </div>
      </div>
      <button
        className="text-white flex gap-2 px-7 py-3 rounded-md bg-customBlack"
        onClick={() => {
          setEdit(!edit);
        }}
      >
        {edit ? (
          <>
            <span>
              <Edit />
            </span>
            Edit Profile
          </>
        ) : (
          <>Save</>
        )}
      </button>
    </div>
  );
}

export default Info;
