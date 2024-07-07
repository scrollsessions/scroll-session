import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoints, fetchTrigger, setLoading) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!endpoints.walletPoints) return;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            authorization: process.env.REACT_APP_API_KEY,
          },
        };

        const [
          walletPointsRes,
          bridgeBalancesRes,
          projectMarksRes,
          userProtfolioRes,
        ] = await Promise.all([
          axios.get(endpoints.walletPoints),
          axios.get(endpoints.bridgeBalances),
          axios.get(endpoints.projectMarks),
          axios.get(endpoints.userProtfolio, options),
        ]);

        const [walletPoints, bridgeBalances, projectMarks, userProtfolio] = [
          walletPointsRes.data,
          bridgeBalancesRes.data,
          projectMarksRes.data,
          userProtfolioRes.data,
        ];

        setData({
          walletPoints,
          bridgeBalances,
          projectMarks,
          userProtfolio,
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoints, fetchTrigger, setLoading]);

  return { data, error, isLoading };
};

export default useFetch;

// import { useState, useEffect } from "react";
// import axios from "axios";

// const useFetch = (endpoints, fetchTrigger, setLoading) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (!endpoints.walletPoints) return;

//     const fetchData = async () => {
//       setIsLoading(true);
//       try {

//         const responses = await Promise.all([
//           axios.get(endpoints.walletPoints),
//           axios.get(endpoints.bridgeBalances),
//           axios.get(endpoints.projectMarks),
//         ]);
//         const [walletPoints, bridgeBalances, projectMarks] = responses.map(
//           response => response.data
//         );
//         setData({
//           walletPoints,
//           bridgeBalances,
//           projectMarks,
//         });
//         setLoading(false); // Reset loading state in App component
//       } catch (error) {
//         setError(error.message);
//         setLoading(false); // Reset loading state in App component
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [endpoints, fetchTrigger, setLoading]);

//   return { data, error, isLoading };
// };

// export default useFetch;
