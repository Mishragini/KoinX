import { Fundamentals } from "./Fundamentals";

export function PerformanceCard(){
    return(
        <div className="bg-white my-4 mx-3 p-4 rounded-md">
            <div className="text-xl font-semibold mb-2">Performance</div>
            <div className="flex justify-between items-center mx-8 mb-10">
                <div className="">
                    <div className="text-sm font-light ">
                        Today's Low
                    </div>
                    <div className="text-sm font-normal ">
                        46,930.22
                    </div>
                </div>
                <div className="bg-gradient-to-r from-red-500 via-orange-400 to-green-500 w-3/4 h-2 rounded-md"></div>
                <div>
                    <div className="text-sm font-light ">
                        Today's High
                    </div>
                    <div className="text-sm font-normal ">
                        49,343.83
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mx-8">
                <div className="">
                    <div className="text-sm font-light ">
                        52W Low
                    </div>
                    <div className="text-sm font-normal ">
                        16,930.22
                    </div>
                </div>
                <div className="bg-gradient-to-r from-red-500 via-orange-400 to-green-500 w-3/4 h-2 rounded-md"></div>
                <div>
                    <div className="text-sm font-light ">
                        52W High
                    </div>
                    <div className="text-sm font-normal ">
                        49,743.83
                    </div>
                </div>
            </div>
            <Fundamentals />
        </div>
    )
}