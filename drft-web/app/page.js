import Image from "next/image";
import Navbar from '../components/ui/Navbar';
import Landing from "./sections/Landing";
import {RecruitmentProcess} from './sections/RecruitmentProcess';

export default function Home() {
    return (

        <div>
            <Navbar/>
            <div style={{height: '100vh'}}><Landing/></div>
            <div ><RecruitmentProcess/></div>

        </div>
    );
}
