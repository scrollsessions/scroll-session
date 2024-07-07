import { useState } from "react";
import Hero from "./Hero";
import Results from "./Results";
import TotalPoints from "./TotalPoints";
import useFetch from "../hooks/useFetch";
import ProjectMarks from "./ProjectMarks";
import BridgePoints from "./BridgePoints";
import Footer from "./Footer";
import Loading from "./Loading";
import Error from "./Error";
import UserPortfolio from "./UserPortfolio";

function App() {
  const [input, setInput] = useState("");
  const [endpoints, setEndpoints] = useState({});
  const [loading, setLoading] = useState(false);
  const [fetchTrigger, setFetchTrigger] = useState(0);
  const [inputError, setInputError] = useState("");

  const handleFetch = () => {
    if (input.length === 42) {
      setLoading(true);
      setInputError("");
      const baseUrl =
        "https://kx58j6x5me.execute-api.us-east-1.amazonaws.com/scroll";
      const walletQuery = `?walletAddress=${input}`;
      setEndpoints({
        walletPoints: `${baseUrl}/wallet-points${walletQuery}`,
        bridgeBalances: `${baseUrl}/bridge-balances${walletQuery}`,
        projectMarks: `${baseUrl}/project-marks${walletQuery}`,
        userProtfolio: `https://api.zerion.io/v1/wallets/${input}/positions/?filter[positions]=no_filter&currency=usd&filter[chain_ids]=scroll&filter[trash]=only_non_trash&sort=value`,
      });
      setFetchTrigger((prev) => prev + 1);
    } else {
      setInputError("Please enter a valid wallet");
    }
  };

  const { data, error, isLoading } = useFetch(
    endpoints,
    fetchTrigger,
    setLoading
  );


  return (
    <div className="App font-raleway w-full min-h-screen bg-hero-image bg-cover flex flex-col justify-between">
      <Hero input={input} setInput={setInput} handleFetch={handleFetch} />
      {inputError && <Error message={inputError} />}
      {error && <Error message={error} />}
      {(isLoading || loading) && <Loading />}
      {!isLoading &&
        !error &&
        !inputError &&
        data &&
        Object.keys(data).length > 0 && (
          <>
            <Results>
              <TotalPoints data={data.walletPoints} />
              <UserPortfolio data={data.userProtfolio.data}/>
              <ProjectMarks data={data.projectMarks} />
              <BridgePoints data={data.bridgeBalances} />
            </Results>
          </>
        )}
      <Footer />
    </div>
  );
}

export default App;

// import { useState } from "react";
// import Hero from "./Components/Hero";
// import Results from "./Components/Results";
// import TotalPoints from "./Components/TotalPoints";
// import useFetch from "./hooks/useFetch";
// import ProjectMarks from "./Components/ProjectMarks";
// import BridgePoints from "./Components/BridgePoints";
// import Footer from "./Components/Footer";
// import Loading from "./Components/Loading";
// import Error from "./Components/Error";

// function App() {
//   const [input, setInput] = useState("");
//   const [endpoints, setEndpoints] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [fetchTrigger, setFetchTrigger] = useState(0);
//   const [inputError, setInputError] = useState("");

//   const handleFetch = () => {
//     if (input.length === 42) {
//       setLoading(true);
//       setInputError("");
//       const baseUrl =
//         "https://kx58j6x5me.execute-api.us-east-1.amazonaws.com/scroll";
//       const walletQuery = `?walletAddress=${input}`;
//       setEndpoints({
//         walletPoints: `${baseUrl}/wallet-points${walletQuery}`,
//         bridgeBalances: `${baseUrl}/bridge-balances${walletQuery}`,
//         projectMarks: `${baseUrl}/project-marks${walletQuery}`,
//       });
//       setFetchTrigger((prev) => prev + 1);
//     } else {
//       setInputError("Please enter a valid wallet");
//     }
//   };

//   const { data, error, isLoading } = useFetch(
//     endpoints,
//     fetchTrigger,
//     setLoading
//   );

//   return (
//     <div className="App font-raleway w-full min-h-screen bg-hero-image bg-cover flex flex-col justify-between">
//       <Hero input={input} setInput={setInput} handleFetch={handleFetch} />
//       {inputError && <Error message={inputError} />}
//       {error && <Error message={error} />}
//       {(isLoading || loading) && <Loading />}
//       {!isLoading &&
//         !error &&
//         !inputError &&
//         data &&
//         Object.keys(data).length > 0 && (
//           <>
//             <Results>
//               <TotalPoints data={data.walletPoints} />
//               <ProjectMarks data={data.projectMarks} />
//               <BridgePoints data={data.bridgeBalances} />
//             </Results>
//           </>
//         )}
//       <Footer />
//     </div>
//   );
// }

// export default App;
