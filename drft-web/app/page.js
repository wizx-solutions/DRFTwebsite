import Image from "next/image";
import Navbar from '../components/ui/Navbar';
import Landing from "./sections/Landing";
import {RecruitmentProcess} from './sections/RecruitmentProcess';
import AboutUs from "./sections/AboutUs";

export default function Home() {
    return (
        <div className='w-lvw overflow-x-hidden'>
            <Navbar/>
            <div id="home"><Landing/></div>
            <div className=" relative z-10">
              <div className="absolute lg:-bottom-[400px] -bottom-60 -right-96 w-[400px] h-[400px] lg:w-[500px] lg:h-[800px] bg-blueLight rounded-full lg:blur-[400px] blur-[200px] z-10"></div>
              <div className="absolute w-[2000px] h-52 lg:-bottom-32 -bottom-36 left-0 right-0 mx-auto bg-brandBlack blur-2xl z-0"></div>
            </div>


            <div  id="section1"><AboutUs/></div>
            <div ><RecruitmentProcess/></div>
        </div>
    );
}
