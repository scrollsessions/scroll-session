import React from "react";
import { WalletIcon } from "./Icons";

function UserPortfolio({ data }) {
  const newData = (data) => {
    return data.reduce((acc, item) => {
      const protocol = item.attributes.protocol || "userWallet";
      if (!acc[protocol]) {
        acc[protocol] = [];
      }
      acc[protocol].push(item);
      return acc;
    }, {});
  };

  const portfolioData = newData(data);
  console.log(portfolioData);

  return (
    <div className="wallet-points w-full pt-4 overflow-y-scroll">
      <h4 className="text-center text-2xl font-semibold mb-2 text-[#ff684b]">
        User Portfolio
      </h4>
      <div>
        {Object.keys(portfolioData).map((key) => {
          return (
            <div key={key}>
              {key === "userWallet" ? (
                <div className="min-w-[300px] mt-6">
                  <div className="flex justify-between items-center leading-[] p-4 rounded-xl mb-2 bg-[#f4fdfd]">
                    <div className="flex items-center">
                      {WalletIcon}
                      <p className="ml-2 font-semibold text-xl">Wallet</p>
                    </div>
                    <p className="font-semibold text-xl">Amount</p>
                  </div>
                  {portfolioData[key].map((item) =>
                    item.attributes.fungible_info.flags.verified ? (
                      <div
                        key={item.attributes.changes.absolute_1d}
                        className="flex justify-between items-center leading-[50px] hover:bg-[#ffffff82] px-4 rounded-xl mb-2"
                      >
                        <div className="flex flex-row items-center">
                          <img
                            className="w-8 h-8 rounded-full mr-3"
                            src={
                              item.attributes.fungible_info.icon?.url
                                ? item.attributes.fungible_info.icon.url
                                : "https://scroll.io/static/media/Scroll_Logomark.673577c8260b63ae56867bc9af6af514.svg"
                            }
                            alt={`${item.attributes.fungible_info.name} Logo`}
                          />
                          <p>{item.attributes.fungible_info.symbol}</p>
                        </div>
                        <p className="text-2xl">
                          {item.attributes.quantity.float.toFixed(4)}
                          <span className="text-sm font-extralight ml-1">
                            (${item.attributes.value.toFixed(2)})
                          </span>
                        </p>
                      </div>
                    ) : (
                      ""
                    )
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>

      <div>
        {Object.keys(portfolioData).map((key) => {
          return (
            <div key={key}>
              {key !== "userWallet" &&
              portfolioData[key][0].attributes.value > 0.01 ? (
                <div className="min-w-[300px] mt-6">
                  <div className="flex justify-between items-center leading-[] p-4 rounded-xl mb-2 bg-[#f4fdfd]">
                    <div className="flex items-center">
                      <img
                        className="w-8 rounded-full"
                        src={
                          portfolioData[key][0].attributes.application_metadata
                            .icon.url
                        }
                        alt={`${key} Logo`}
                      />
                      <p className="ml-2 font-semibold text-xl">{key}</p>
                    </div>

                    <p className="font-semibold text-xl">Amount</p>
                  </div>
                  {portfolioData[key].map((item) =>
                    item.attributes.fungible_info.flags.verified &&
                    item.attributes.value > 0.01 ? (
                      <div
                        key={item.attributes.changes.absolute_1d}
                        className="flex justify-between items-center leading-[50px] hover:bg-[#ffffff82] px-4 rounded-xl mb-2"
                      >
                        <div className="flex flex-row items-center">
                          <img
                            className="w-8 h-8 rounded-full mr-3"
                            src={
                              item.attributes.fungible_info.icon?.url
                                ? item.attributes.fungible_info.icon.url
                                : "https://scroll.io/static/media/Scroll_Logomark.673577c8260b63ae56867bc9af6af514.svg"
                            }
                            alt={`${item.attributes.fungible_info.name} Logo`}
                          />
                          <p>
                            {item.attributes.fungible_info.symbol}{" "}
                            <span
                              className={`text-sm font-extralight p-2 rounded-lg bg-[#ffdeb5] ml-2 ${item.attributes.position_type}`}
                            >
                              ({item.attributes.position_type})
                            </span>
                          </p>
                        </div>
                        <p className="text-2xl">
                          {item.attributes.quantity.float.toFixed(5)}
                          <span className="text-sm font-extralight ml-1">
                            (${item.attributes.value.toFixed(2)})
                          </span>
                        </p>
                      </div>
                    ) : (
                      ""
                    )
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserPortfolio;
