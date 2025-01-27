"use client";
import {useScroll, useTransform, motion} from "framer-motion";
import React, {useEffect, useRef, useState} from "react";

export const Timeline = ({data}) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start 20%", "end 80%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full  md:px-10" ref={containerRef}>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index}
                         className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} pt-10 lg:pt-16 md:gap-10`}>
                        <div
                            className={`relative ${index % 2 === 0 ? 'pr-20' : 'pl-20'} text-justify w-full md:w-1/2`}>
                            <div style={{
                                backgroundColor: '#111c2e',
                                color: 'white',
                                padding: '30px',
                                borderRadius: '15px',
                                borderColor: '#6b4920',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                position: 'relative'
                            }}>
                                <div
                                    className={`absolute -top-5 ${index % 2 === 0 ? '-right-5' : '-left-5'} w-10 h-10 bg-customOrange text-white rounded-full flex items-center justify-center`}>
                                    {index + 1}
                                </div>
                                <h3 className="text-2xl mb-4 font-bold text-neutral-500 dark:text-neutral-500"
                                    style={{color: '#ff8e00'}}>
                                    {item.title}
                                </h3>
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
                <div
                    style={{height: height + "px"}}
                    className="absolute left-1/2 transform -translate-x-1/2 top-0 overflow-hidden w-[4px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
                    <motion.div
                        style={{height: heightTransform, opacity: opacityTransform}}
                        className="absolute inset-x-0 top-0 w-[6px] bg-orangeLight rounded-full"/>
                </div>
            </div>
        </div>
    );
};
