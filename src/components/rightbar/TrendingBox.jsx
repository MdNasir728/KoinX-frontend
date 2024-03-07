import CoinData from "@/lib/shared/CoinData";
import React, { useEffect, useState } from "react";
import { queryFn, isChangePositive } from "../../hooks/useQueryTrending";

const TrendingBox = () => {
  const [trendingCoin, setTrendingCoin] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // queryFn({ setIsLoading, setTrendingCoin });
  }, []);
  return (
    <div className="flex flex-col bg-white w-full rounded-lg p-4 md:p-8 mb-4 md:gap-8 gap-4">
      <h1 className="font-sans text-xl font-semibold">Trending Coins (24h)</h1>
      {trendingCoin?.coins?.slice(0, 4).map((coin) => (
        <CoinData
          key={coin?.item.id}
          isLoading={isLoading}
          symbol={coin?.item?.symbol}
          img={coin?.item?.small}
          name={coin?.item?.name}
          change={coin?.item?.data?.price_change_percentage_24h?.usd}
          isChangePositive={isChangePositive(
            coin?.item?.data?.price_change_percentage_24h?.usd
          )}
        />
      ))}
    </div>
  );
};

export default TrendingBox;
