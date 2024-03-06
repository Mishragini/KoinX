export function Navbar(){
    return(
        <>
        <div className="flex justify-between mx-4 mb-2">
            <div className="text-slate-600 text-sm font-semibold">Overview</div>
            <div className="text-slate-600 text-sm font-semibold">Fundamentals</div>
            <div className="text-slate-600 text-sm font-semibold">New insights</div>
            <div className="text-slate-600 text-sm font-semibold">Sentiments</div>
            <div className="text-slate-600 text-sm font-semibold">Team</div>
            <div className="text-slate-600 text-sm font-semibold">Technicals</div>
            <div className="text-slate-600 text-sm font-semibold">Tokeconomics</div>
        </div>
        <hr className="bg-slate-500"></hr>
        </>
    )
}