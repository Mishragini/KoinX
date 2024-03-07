import john1svg from "../assets/john.svg";
import elinasvg from "../assets/elina.svg";
import john2svg from "../assets/john2.svg";
export function Team(){
    return(
        <div id="team" className="bg-white my-4 mx-4 p-4 rounded-md">
            <div className="text-2xl font-semibold mb-2">Team</div>
            <div className="text-lg text-slate-700 my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, numquam repellat dolore nesciunt laboriosam sunt quam laborum? Doloremque quidem animi repudiandae neque, omnis quas veritatis nam ipsam non officia labore!</div>
            <TeamMate name="John Smith" svg={john1svg} />
            <TeamMate name="Elina William" svg={elinasvg} />
            <TeamMate name="John Smith" svg={john2svg} />  
        </div>
    )
}
interface teamMateProps{
    name:string,
    svg:any
}
function TeamMate({name,svg}:teamMateProps){
    return(
        <div className="bg-blue-200 p-4 my-4 rounded-md justify-center items-center">
            <div className="flex flex-col justify-center items-center md:flex-row">
                <div className="md:mr-2 w-1/2">
                    <img src={svg} className="logo md:mr-4" alt="pfp" />
                    <div className="text-md font-semibold">{name}</div>
                    <div className="text-xs text-gray-500">Designation here</div>
                </div>
                <div className="px-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam id vel aut quos rem modi repudiandae autem unde iure nobis animi similique maxime commodi, soluta exercitationem. Est sit nulla quaerat!
                    Vitae amet odit deleniti dolores nesciunt quo voluptatum nemo repudiandae ipsam ullam, maxime adipisci nihil minima incidunt obcaecati veritatis. Similique, molestias molestiae. Aliquid sequi accusamus, qui deleniti harum repudiandae culpa.
                    Sunt reprehenderit, quam sint voluptatem atque possimus obcaecati quia ullam quos! Libero rem blanditiis sapiente tenetur impedit consequatur ad quibusdam excepturi unde dolores nam, cum delectus, perferendis officia labore facilis?
                </div>
            </div>

        </div>
    )
}