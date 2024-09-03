"use client";
import React, { useEffect, useState } from "react";
import Information from "./Information";
function DetailsInfo({ edit, data, setData }) {
  const [active, setActive] = useState(0);
  // const [data, setData] = useState({});

  useEffect(() => {
    setData(Information[active]);
  }, [active]);

  const handleData = (index) => {
    setActive(index);
  };

  const handleChange = (key, value) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleFinancialChange = (key, value) => {
    setData((prevData) => {
      const updatedFinancialInfo = {
        ...prevData.financialInformation,
        [key]: value,
      };

      // Calculate Total_Salary dynamically
      if (key === "Works_hours" || key === "Salary_hour") {
        const worksHours = parseFloat(updatedFinancialInfo.Works_hours) || 0;
        const salaryHour = parseFloat(updatedFinancialInfo.Salary_hour) || 0;
        updatedFinancialInfo.Total_Salary = (worksHours * salaryHour).toFixed(
          2
        );
      }

      return {
        ...prevData,
        financialInformation: updatedFinancialInfo,
      };
    });
  };

  return (
    <div className="mt-4">
      <div className="flex gap-6">
        {Information.map((item, index) => (
          <p
            key={index}
            className={`flex gap-1 cursor-pointer pb-2 font-thin ${
              active === index
                ? "fill-red-500 text-red-500 font-medium stroke-slate-200 border-b-2 border-red-500 "
                : "stroke-customBlack2 fill-none text-customBlack2"
            } `}
            onClick={() => handleData(index)}
          >
            <span>{item.icon}</span>
            {item.title}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-2 mt-4 gap-3">
        {Object.entries(data).map(([key, value]) =>
          key !== "title" &&
          key !== "icon" &&
          key !== "image" &&
          key !== "financialInformation" ? (
            <div key={key} className="w-full border-b-2 border-borderColor">
              <label className="text-labelColor text-[14px]">
                {key.replaceAll("_", " ")}
              </label>
              <input
                className={`w-full py-2 bg-transparent ${
                  !edit && "bg-white px-2"
                }`}
                value={value}
                onChange={(e) => handleChange(key, e.target.value)}
                disabled={edit}
              />
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {data.financialInformation
          ? Object.entries(data.financialInformation).map(([key, value]) =>
              key === "Total_Salary" ? (
                <div className="w-full" key={key}>
                  <label className="text-red-500">
                    {key.replace("_", " ")}
                  </label>
                  <p className="py-1">{value}</p>
                </div>
              ) : (
                <div className="w-full flex flex-col gap" key={key}>
                  <label>{key.replace("_", " ")}</label>
                  <input
                    className={`w-full py-1 bg-transparent ${
                      !edit && "bg-white px-2"
                    }`}
                    disabled={edit}
                    value={value}
                    onChange={(e) => handleFinancialChange(key, e.target.value)}
                  />
                </div>
              )
            )
          : ""}
      </div>
    </div>
  );
}

export default DetailsInfo;
