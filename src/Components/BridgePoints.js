import { GasIcon, logoUrls } from "./Icons";

function BridgePoints({ data }) {
  return (
    <div className="Bridge-points mt-8 pt-8">
      <h4 className="text-center text-2xl font-semibold mb-2 text-[#ff684b]">
        Session Zero
      </h4>
      <h4 className="text-center text-2xl font-semibold mb-2 text-[#ff684b]">
        Bridged eligible assets
      </h4>
      <p className="mb-4 font-extralight text-sm text-center">
        Marks are given to all eligible bridged assets since Scroll's mainnet
        launch on October 10th, 2023, based on amount and time held on Scroll.
      </p>

      {/* Bridge amount points  */}

      <div className="flex-row overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="w-full p-4 mb-2">
              <th className="w-1/3 leading-tight md:leading-[58px] text-left pl-4 rounded-l-lg bg-[#ffdeb5] md:text-xl text-sm font-semibold ">
                Asset
              </th>
              <th className="w-1/3 md:leading-[58px] text-center bg-[#ffdeb5] md:text-xl text-sm font-semibold">
                Bridge Amount
              </th>
              <th className="w-1/3 md:leading-[58px] text-right pr-4 rounded-r-lg bg-[#ffdeb5] md:text-xl text-sm font-semibold">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => {
                return item.bridge_asset !== "PENCILS" &&
                  item.bridge_asset !== "gas-points" ? (
                  <tr key={item.bridge_asset} className="hover:bg-[#ffffff82]">
                    <td className="p-4 rounded-l-lg">
                      <div className="flex flex-row items-center">
                        <img
                          src={logoUrls[item.bridge_asset]}
                          className="w-8 h-8 rounded-full mr-3"
                          alt=""
                        />
                        <p>{item.bridge_asset}</p>
                      </div>
                    </td>
                    <td className=" p-4">
                      <p className="text-2xl text-center">
                        💲{item.value_in_usd && Math.ceil(item.value_in_usd)}
                      </p>
                    </td>
                    <td className=" p-4 rounded-r-lg">
                      <p className="text-2xl text-right">
                        {item.points && item.points.toFixed(2)}
                      </p>
                    </td>
                  </tr>
                ) : (
                  ""
                );
              })}
          </tbody>
        </table>
      </div>

      {/*  Gas Spent Points  */}

      {/* {data} */}
      {data && data.find((item) => item.bridge_asset === "gas-points") && (
        <div className="mt-8">
          <h4 className="text-center text-2xl font-semibold mb-2 text-[#ff684b]">
            Gas spent on Scroll
          </h4>

          <div className="text-xl font-semibold flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div>{GasIcon}</div>
              <p>
                Gas Amount: 💲
                {data
                  .find((item) => item.bridge_asset === "gas-points")
                  .value_in_usd.toFixed(2)}
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p>
                Gas Points: {data
                  .find((item) => item.bridge_asset === "gas-points")
                  .points.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BridgePoints;
