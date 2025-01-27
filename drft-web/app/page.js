import Image from "next/image";
import Navbar from '../components/ui/Navbar';
import Landing from "./sections/Landing";
import {RecruitmentProcess} from './sections/RecruitmentProcess';
import AboutUs from "./sections/AboutUs";

export default function Home() {
    return (

        <div>
            <Navbar/>
            <div id="home"><Landing/></div>
            <div  id="section1"><AboutUs/></div>
            <div ><RecruitmentProcess/></div>

        </div>
    );
}
