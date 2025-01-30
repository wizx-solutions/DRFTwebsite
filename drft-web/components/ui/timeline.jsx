"use client";
import {useScroll, useTransform, motion} from "framer-motion";
import React, {useEffect, useRef, useState} from "react";

export const Timeline = ({data}) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setHeight(containerRef.current.getBoundingClientRect().height);
        }
    }, [containerRef]);

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start 30%", "end 85%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full md:px-10 pr-6" ref={containerRef}>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index}
                         className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} pt-10 md:pt-0 md:gap-10`}>
                        <div
                            className={`relative ${index % 2 === 0 ? 'md:pr-20' : 'md:pl-20'} text-center lg:text-justify w-full md:w-1/2`}>
                            <div className="bg-[#111c2e] text-white p-8 rounded-3xl border-2 border-[#6b4920] relative">
                                <div
                                    className={`absolute -top-5 -right-5 ${index % 2 === 0 ? 'md:-right-5' : 'md:-left-5'} w-10 h-10 bg-customOrange text-white rounded-full flex items-center justify-center`}>
                                    {index + 1}
                                </div>
                                <h3 className="text-2xl mb-4 font-bold text-[#ff8e00]">
                                    {item.title}
                                </h3>
                                <h6 className="text-sm lg:text-lg font-normal">{item.content}</h6>
                            </div>
                        </div>
                    </div>
                ))}
                <div
                    className="absolute -right-8 md:left-1/2 transform md:-translate-x-1/2 top-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                    style={{height: height + "px"}}>
                    <motion.div style={{height: heightTransform, opacity: opacityTransform}}
                                className="absolute inset-x-0 top-0 w-[6px] bg-orangeLight rounded-full"/>
                </div>
            </div>
        </div>
    );
};
