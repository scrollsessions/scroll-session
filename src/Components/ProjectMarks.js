import React from "react";
import { logoUrls } from "./Icons";

function ProjectMarks({ data }) {
  return (
    <div className="dex-lending-points w-full pt-4">
      {/* dex points  */}
      <div className="dex-points">
        <h4 className="text-center text-2xl font-semibold mb-2 text-[#ff684b]">
          Dex Points
        </h4>
        <p className="mb-4 font-extralight text-sm text-center">
          Marks are given to users who deposit eligible assets into selected
          DEXs’ liquidity pools. Liquidity deposits with tighter ranges or more
          market depth are given Marks at a higher rate.
        </p>
        <div className="flex-row">
          <div className="flex justify-between items-center leading-[50px] p-4 rounded-xl mb-2 bg-[#ffdeb5]">
            <p className="text-xl font-semibold">Protocol</p>
            <p className="text-xl font-semibold">Points</p>
          </div>
          {data &&
            data[0].dex.map((item) => {
              return (
                <div
                  key={item.project}
                  className="flex justify-between items-center leading-[50px] hover:bg-[#ffffff82] px-4 rounded-xl mb-2"
                >
                  <div className="flex flex-row items-center">
                    {item.project !== "Others" ? (
                      <img
                        className="w-8 h-8 rounded-full mr-3"
                        src={logoUrls[item.project]}
                        alt={`${item.project} Logo`}
                      />
                    ) : (
                      ""
                    )}

                    <p>{item.project}</p>
                  </div>
                  <p
                    className={`${
                      item.project === "Others" ? "text-sm" : "text-2xl"
                    }`}
                  >
                    {item.project === "Others"
                      ? "Comming Soon"
                      : item.marks.toFixed(2)}
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      {/* borrow / lending points  */}
      <div className="lending-points mt-8">
        <h4 className="text-center text-2xl font-semibold mb-2 text-[#ff684b]">
          Lending & Borrowing Points
        </h4>
        <p className="mb-4 font-extralight text-sm text-center">
          Marks are given to users who deposit eligible assets into selected
          lending markets. Marks are not given for recursive
          supplying/borrowing.
        </p>
        <div className="flex-row">
          <div className="flex justify-between items-center leading-[50px] p-4 rounded-xl mb-2 bg-[#ffdeb5]">
            <p className="text-xl font-semibold">Protocol</p>
            <p className="text-xl font-semibold">Points</p>
          </div>
          {data &&
            data[0].lending.map((item) => {
              return (
                <div
                  key={item.project}
                  className="flex justify-between items-center leading-[50px] hover:bg-[#ffffff82] px-4 rounded-xl mb-2"
                >
                  <div className="flex flex-row items-center">
                    {item.project !== "Others" ? (
                      <img
                        className="w-8 h-8 rounded-full mr-3"
                        src={logoUrls[item.project]}
                        alt={`${item.project} Logo`}
                      />
                    ) : (
                      ""
                    )}

                    <p>{item.project}</p>
                  </div>
                  <p
                    className={`${
                      item.project === "Others" ? "text-sm" : "text-2xl"
                    }`}
                  >
                    {item.marks !== null && item.project !== "Others"
                      ? item.marks.toFixed(2)
                      : item.project !== "Others" && item.marks === null
                      ? 0
                      : item.project === "Others"
                      ? "Comming Soon"
                      : ""}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ProjectMarks;
