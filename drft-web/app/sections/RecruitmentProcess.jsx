import Image from "next/image";
import React from "react";
import {Timeline} from "@/components/ui/timeline";

export function RecruitmentProcess() {
    const data = [
        {
            title: "Digging Into Your Requirements",
            content: (
                <div>
                    We kick off by collaborating with you closely to gain a thorough understanding of your specific
                    requirements. Whether it's a short-term project, a long-term position, or specialized expertise, we
                    ensure we truly understand your business goals and deliver exactly what you’re looking for.
                </div>
            ),
        },
        {
            title: "Connecting with the Best Talent",
            content: (
                <div>
                    Leveraging our global network, we connect you with exceptional professionals who perfectly match
                    your needs. Our talent pool is rich in diverse skills, experiences, and perspectives, ready to
                    tackle any challenge and drive your business forward.
                </div>
            ),
        },
        {
            title: "Handpicking best of the best",
            content: (
                <div>
                    We carefully screen every candidate through in-depth interviews, technical assessments, and skill
                    evaluations. Only the best of the best make the cut, ensuring they bring the right expertise to
                    drive your business forward.
                </div>
            ),
        },
        {
            title: "Smooth Onboarding",
            content: (
                <div>
                    Once we've found the perfect fit, we ensure a smooth and seamless integration process. Whether
                    remote or in a flexible setup, we provide full support to both the client and talent, guiding them
                    through a seamless onboarding experience. Our goal is to ensure that both parties are fully aligned
                    with the company’s culture, vision, and goals, fostering a strong, long-term partnership from day
                    one.
                </div>
            ),
        },
        {
            title: "Supporting Success, Every Step of the Way",
            content: (
                <div>
                    Our commitment doesn’t stop once the hire is made. We offer continuous support to ensure the
                    long-term success of the partnership. Through regular feedback and check-ins, we fine-tune the
                    experience, guaranteeing optimal performance and satisfaction for both clients and talent, every
                    step of the way.
                </div>
            ),
        },
    ];

    return (
        <div className="w-full pl-6 pr-14 md:px-40">
            <div className="text-4xl text-customBlue font-bold text-center mb-28">
                Bridging Recruitment Process<br/> Borders, Breaking Barriers
            </div>
            <Timeline data={data}/>
        </div>
    );
}
