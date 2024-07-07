import { convertEpochToHumanTime } from "../functions/functions";

function TotalPoints({ data }) {
  return (
    <div className="total-points flex flex-col md:flex-row w-full justify-between items-center">
      <div className="total-points py-4 flex flex-row gap-2 justify-center items-center">
        <p className="text-2xl font-normal text-center">Total Points:</p>
        <p className="text-4xl font-semibold text-center">
          {data && data[0].points.toFixed(2)}
        </p>
      </div>

      <div className="total-points py-4 flex flex-row gap-2 justify-center items-center">
        <p className="text-2xl font-normal text-center">Last Update:</p>
        <p className="text-2xl font-semibold text-center">
          {data && convertEpochToHumanTime(data[0].timestamp)}
        </p>
      </div>
    </div>
  );
}

export default TotalPoints;
