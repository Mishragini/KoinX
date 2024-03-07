import { CoinSlider } from "./CoinSlider";

export function Footer(){
return(
    <div id="technicals" className="bg-white p-4 rounded-md">
    
        <div className="text-2xl font-semibold mx-4 my-2">You May Also Like</div>
        <CoinSlider/>
        <div className="text-2xl font-semibold mx-4 my-2">Trending Coins</div>
        <CoinSlider />
    </div>
)
}