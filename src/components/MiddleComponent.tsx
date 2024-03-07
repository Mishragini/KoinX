import { TrendingCoinCard } from './TrendingCoinsCard'
import { Navbar } from './Navbar';
import { PerformanceCard } from './PerformanceCard';
import { Sentiment } from './Sentiment';
import { AbouBitcoin } from './AboutBitcoin';
import { Tockeconomics } from './Tokeconomics';
import { Team } from './Team';
import { GraphCard } from './GraphCard'
import { GetStartedForFreeCard } from './GetStartedForFree'

export function MiddleComponent(){
    return(
        <div className='grid grid-cols-12'>
        <div className='col-span-12 md:col-span-9'>
          <GraphCard />
          <Navbar />
          <PerformanceCard />
          <Sentiment />
          <AbouBitcoin />
          <Tockeconomics />
          <Team />
        </div>

        <div className='col-span-12 md:col-span-3 flex flex-col'>
          <GetStartedForFreeCard />
          <TrendingCoinCard />
        </div>
        
      </div>
      
    )
}