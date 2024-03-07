import { useRecoilState } from "recoil";
import { trendingCoinState } from "../stateManagement/atom"; // Import the Coin type or use the actual type definition
import { useEffect } from "react";
const API_KEY=import.meta.env.VITE_API_KEY;
const COINGECKO_URL=import.meta.env.VITE_COINGECKO_URL;  

import axios from "axios";

export function TrendingCoinCard() {
    const[trendingCoins, setTrendingCoins]=useRecoilState(trendingCoinState)
  async function fetchTrendingCoins(){
    const res=await axios.get(`${COINGECKO_URL}/search/trending?x_cg_demo_api_key=${API_KEY}`)
    setTrendingCoins(res.data.coins);
  }
   useEffect(()=>{
    fetchTrendingCoins();
   },[])
  const topThreeCoins = trendingCoins.slice(0, 3);

  return (
    <div className="bg-white flex flex-col p-4 mx-5 my-4 rounded-lg">
    <div className="text-xl font-bold mb-2">Trending Coins (24h)</div>

      {topThreeCoins.map((coin:any) => (
        <div className="flex justify-between mb-2" key={coin.item.coin_id}>
            <div className="flex items-center justify-center">
            <img className="w-6 h-6 mr-2" src={coin.item.thumb}></img>
          <div className="text-sm font-semibold">{coin.item.name}</div>
          </div>
          <div >
            {(coin.item.data.price_change_percentage_24h.inr>0)?
          <button type="button" className="px-2 py-2 text-xs font-medium text-center text-green-700 bg-green-200 rounded-lg flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>{coin.item.data.price_change_percentage_24h.inr.toFixed(2)}</button>:
          <button type="button" className="px-2 py-2 text-xs font-medium text-center text-red-700 bg-red-200 rounded-lg flex "> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
        {coin.item.data.price_change_percentage_24h.inr.toFixed(2)}
        </button>

        }
          </div>
        </div>
      ))}
    </div>
  );
}
