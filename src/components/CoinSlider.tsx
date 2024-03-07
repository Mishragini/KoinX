import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRecoilValue } from "recoil";
import { trendingCoinState } from "../stateManagement/atom";


export function CoinSlider() {
    const trendingCoins = useRecoilValue(trendingCoinState);
    console.log(trendingCoins);

    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        
            <Slider {...carouselSettings}>
                {trendingCoins.map((coin:any) => (
                    <Card key={coin.item.id} coin={coin} />
                ))}
            </Slider>
        
    );
}



function Card({ coin }: any) {
    return (
        <div  className='border border-slate-300 flex flex-col justify-center mx-4 rounded-md p-2 '>
            <div className='flex justify-start items-center'>
            <img className="w-6 h-6 mr-2" src={coin.item.thumb}></img>
                <div className='text-xs mr-2'>{coin.item.symbol}</div>
                <div>
                    {(coin.item.data.price_change_percentage_24h.inr > 0) ?
                        <button type="button" className="px-1 py-1 text-xs font-medium text-center text-green-700 bg-green-200 rounded-lg flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>{coin.item.data.price_change_percentage_24h.inr.toFixed(2)}
                        </button> :
                        <button type="button" className="px-1 py-1 text-xs font-medium text-center text-red-700 bg-red-200 rounded-lg flex ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            {coin.item.data.price_change_percentage_24h.inr.toFixed(2)}
                        </button>
                    }
                </div>
            </div>
            <div className='text-lg font-semibold'>  
            {coin.item.data.price.split('<')[0]}
            </div>
            <img src={coin.item.data.sparkline} />
        </div>
    );
}
