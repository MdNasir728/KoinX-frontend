import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import CoinCard from "@/lib/shared/CoinCard";
import { queryFn, isChangePositive } from "../../hooks/useQueryTrending";

const YouMayLike = ({ trending }) => {
  const [trendingCoin, setTrendingCoin] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // queryFn({setIsLoading, setTrendingCoin});
  }, []);

  return (
    <div className="bg-white rounded-lg md:p-8 max-md:p-4 md:-mb-16">
      {trending ? (
        <h1 className="text-2xl font-semibold mb-8">Trending Coins</h1>
      ) : (
        <h1 className="text-2xl font-semibold mb-8">You May Also Like</h1>
      )}

      <Carousel className="lg:m-6 max-md:overflow-x-auto overflow-hidden">
        <CarouselContent>
          {trendingCoin?.coins?.map((coin) => (
            <CarouselItem
              key={coin?.item.id}
              className="md:basis-[16rem] basis-[20rem] mr-1"
            >
              <CoinCard
                isLoading={isLoading}
                symbol={coin?.item?.symbol}
                img={coin?.item?.small}
                price={coin?.item?.data?.price}
                sparkline={coin?.item?.data?.sparkline}
                change={coin?.item?.data?.price_change_percentage_24h?.usd}
                isChangePositive={isChangePositive(
                  coin?.item?.data?.price_change_percentage_24h?.usd
                )}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='md:block hidden'/>
        <CarouselNext className='md:block hidden' />
      </Carousel>
    </div>
  );
};

export default YouMayLike;
