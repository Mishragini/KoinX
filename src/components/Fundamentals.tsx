export function Fundamentals(){
return(
    <div id="fundamentals">
    <div className="text-slate-700 text-lg font-semibold my-4 mt-4">Fundamentals</div>
    <div className=" md:flex justify-between mb-4 mt-4 mx-6">
    <div>
        <div className="flex justify-between mb-4 mt-4">
            <div className="text-slate-500 text-sm mr-6">Bitcoin Price</div>
            <div className="text-sm mr-6">$16,815.46</div>
        </div>
        <hr className="bg-slate-500"></hr>
        <div className="flex justify-between mb-4 mt-4 ">
            <div className="text-slate-500 text-sm mr-6">24h Low / 24h High</div>
            <div className="text-sm mr-6">$16,382.07/$16,874.12</div>
        </div>
        <hr className="bg-slate-500"></hr>
        <div className="flex justify-between mb-4 mt-4 ">
            <div className="text-slate-500 text-sm mr-6">7d Low / 7d High</div>
            <div className="text-sm mr-6">$16,382.07 / $16,874.12</div>
        </div>
        <hr className="bg-slate-500"></hr>
       
        <div className="flex justify-between mb-4 mt-4">
            <div className="text-slate-500 text-sm mr-6">Trading Volume</div>
            <div className="text-sm mr-6">$23,249,202,782</div>
        </div>
        <hr className="bg-slate-500"></hr>
        <div className="flex justify-between mb-4 mt-4">
            <div className="text-slate-500 text-sm mr-6">Market Cap Rank</div>
            <div className="text-sm mr-6">#1</div>
        </div>
        <hr className="bg-slate-500"></hr>

    </div>
    <div>
        <div className="flex justify-between mb-4 mt-4">
            <div className="text-slate-500 text-sm mr-6">Market Cap</div>
            <div className="text-sm mr-6">$323,507,290,047</div>
        </div>
        <hr className="bg-slate-500"></hr>
        <div className="flex justify-between mb-4 mt-4">
            <div className="text-slate-500 text-sm mr-6">Market Cap Dominance</div>
            <div className="text-sm mr-6">38.343%</div>
        </div>
        <hr className="bg-slate-500"></hr>
        <div className="flex justify-between mb-4 mt-4">
            <div className="text-slate-500 text-sm mr-6">Volume / Market Cap</div>
            <div className="text-sm mr-6">0.0718</div>
        </div>
        <hr className="bg-slate-500"></hr>
       
        <div className="flex justify-between mb-4 mt-4">
            <div className="text-slate-500 text-sm mr-6">All-Time High</div>
            <div className="flex flex-col items-end ">
            <div className="text-sm mr-6">$69,044.77 <span className="text-red-500">-75.6%</span></div>
            <div className="text-sm"> Nov 10, 2021 (about 1 year)</div>
            </div>
            
        </div>
        <hr className="bg-slate-500"></hr>
        <div className="flex justify-between mb-4 mt-4">
            <div className="text-slate-500 text-sm mr-6">All-Time Low</div>
            <div className="flex flex-col items-end">
            <div className="text-sm mr-6">$67.81 <span className="text-green-500">24729.1%</span></div>
            <div className="text-sm"> Jul 06, 2013 (over 9 years)</div>
            </div>
        </div>
        <hr className="bg-slate-500"></hr>

    </div>
    </div>
    </div>
)
}