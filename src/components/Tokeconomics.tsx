import circularChartsvg from "../assets/circularChart.svg"
export function Tockeconomics(){
    return(
        <div className="bg-white my-4 mx-4 p-4 rounded-md">
            <div className="text-2xl font-bold my-4 mx-4">Tockeconomics</div>
            <div className="text-xl font-bold my-4 mx-4">
             Initial Distribution
            </div>
            <div className="flex items-center">
            <img src={circularChartsvg} className="logo mx-4 my-4" alt="chart"  />
            <div className="mx-10">
                <div className="flex items-center my-2">
                <Circle bgColor={"bg-blue-500"} />
                <div className="text-xl text-slate-700">Crowdsale investors: 80%</div>
                </div>
                <div  className="flex items-center my-2">
                <Circle bgColor={"bg-orange-500"} />
                <div className="text-xl text-slate-700">Foundation: 20%</div>
                </div>
            </div>
            </div>
            <div className="text-lg text-slate-700 mx-4 my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, labore quis minus debitis natus repellendus similique eum quo fugiat aperiam placeat fuga blanditiis hic? Sit maiores nam ex accusamus odit.
                Quam, similique blanditiis? Voluptas nisi numquam ex quod iure quasi atque vel est ipsam aspernatur officia, culpa eaque aliquam officiis necessitatibus. Quibusdam sint vel perspiciatis non reiciendis laborum temporibus consequuntur.
                Eligendi unde repellat veritatis, minus debitis fuga in animi tenetur vero quae iste iusto id! Ipsam exercitationem sunt, illo voluptate iusto suscipit praesentium odio necessitatibus. Animi exercitationem doloremque facilis sit!
                Impedit animi corporis commodi, cum incidunt omnis nihil dignissimos, nesciunt blanditiis provident deserunt. Assumenda quia minima non dolores quisquam, porro quis quos mollitia expedita pariatur consectetur excepturi deleniti doloremque enim.
                Blanditiis nostrum hic dignissimos dolorem voluptatum officiis, quo corporis quidem quia. Fuga neque repellat doloribus porro pariatur tenetur eius deserunt cumque consequuntur facilis corrupti veritatis, vel eum quisquam nam. Enim!
            </div>
        </div>
    )
}
interface CircleProps {
    bgColor: string;
}

function Circle({bgColor}:CircleProps){
  
    return (
        <div className={`${bgColor} rounded-full w-4 h-4 mr-4`}>

        </div>
    )
}