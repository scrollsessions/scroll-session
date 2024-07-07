import { ScrollIcon, SearchIcon } from "./Icons";

function Hero({ input, setInput, handleFetch }) {
  function handleClearInput() {
    setInput("");
  }

  return (
    <div className="w-full pt-20 flex items-center justify-center ">
      <div className="bg-[#fef0dd] rounded-2xl p-4 md:p-10 flex items-center justify-center flex-col w-11/12 lg:w-3/6">
        <div className="flex items-center justify-center w-full">
          {ScrollIcon}
          <h1 className="text-3xl md:text-6xl font-semibold text-center">
            Scroll Session
          </h1>
        </div>
        <h4 className="mt-4">See Wallet Points</h4>
        <div className="search-area mt-4 w-full flex items-center justify-center bg-white rounded-lg px-3 py-2 relative">
          <input
            className="w-full h-10 bg-transparent focus:outline-none focus:border-none"
            type="text"
            placeholder="Enter wallet address..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {input && (
            <button
              className="h-full mr-2 ease-in duration-300 hover:scale-110"
              onClick={handleClearInput}
            >
              x
            </button>
          )}
          <button
            onClick={handleFetch}
            className="ease-in duration-300 hover:scale-110 flex justify-center items-center w-10"
          >
            {SearchIcon}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
