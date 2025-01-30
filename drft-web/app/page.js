import Navbar from '../components/ui/Navbar';
import Landing from "./sections/Landing";
import {RecruitmentProcess} from './sections/RecruitmentProcess';
import Vission from "./sections/Vission";
import AboutUs from "./sections/AboutUs";
import Positions from "./sections/Positions";
import PageEnd from "@/app/sections/PageEnd";


export default function Home() {
    return (
        <div className='w-lvw overflow-x-hidden'>
            <Navbar/>
            <div id="home"><Landing/></div>
            <div className=" relative z-10">
              <div className="absolute lg:-bottom-[400px] -bottom-60 -right-96 w-[400px] h-[400px] lg:w-[500px] lg:h-[800px] bg-blueLight rounded-full lg:blur-[400px] blur-[200px] z-10"></div>
              <div className="absolute w-[2000px] h-52 lg:-bottom-32 -bottom-36 left-0 right-0 mx-auto bg-brandBlack blur-2xl z-0"></div>
            </div>


            <div  id="section1"><Vission/></div>
            <hr className="bg-blueLight border-blueLight " />
            <div id="aboutus"><AboutUs/></div>
            <div className="relative" id="positions">
                <div className="absolute left-0 right-0 mx-auto w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] bg-orangeLight rounded-full lg:blur-[250px] blur-[200px] z-10"></div>
                <div><Positions/></div>
            </div>
             <div id='recruitment'><RecruitmentProcess/></div>
            <div><PageEnd/></div>
        </div>
    );
}
