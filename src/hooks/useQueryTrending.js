import axios from "axios";

export const queryFn = async ({ setIsLoading, setTrendingCoin }) => {
  setIsLoading(true);
  const api_key = import.meta.env.VITE_REACT_APP_API_KEY;
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=${api_key}`
  );
  setTrendingCoin(response.data);
  setIsLoading(false);
  console.log(response.data);
  return response;
};

export const isChangePositive = (change) => {
  if (change > 0) {
    return true;
  } else {
    return false;
  }
};
