export function Appbar(){
    return (
        <div className="flex justify-between p-2  bg-white w-screen">
            <div className="text-2xl font-bold text-blue-700">Koin<span className="text-orange-300">X</span></div>
            <div className="flex justify-center items-center">

                <div className="text-md font-bold mr-6">Crypto Taxes</div>
                <div className="text-md font-bold mr-6">Free tools</div>
                <div  className="text-md font-bold mr-6">Resource Center</div>
                
                <button type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-6">Get Started </button>
            </div>
        </div>
    )
}