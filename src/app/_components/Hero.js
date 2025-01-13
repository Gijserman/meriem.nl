'use client';

import Image from "next/image";
import { motion } from "motion/react";
import {usePathname, useRouter} from "next/navigation";
import { useState, useEffect } from "react";
import {useTransitions} from "../_hooks/use-transitions";

export const pages = [
    {
        label: "Begeleiding",
        uri: "/"
    }, {
        label: "Wie ben ik",
        uri: "/wie-ben-ik"
    }, {
        label: "Rean",
        uri: "/rean"
    }, {
        label: "Sven",
        uri: "/sven"
    }, {
        label: "Contact",
        uri: "/contact"
    }
];
export default function Hero({ isVisible = true }) {
    const transitions = useTransitions();
    const router = useRouter();
    const pathname = usePathname();
    const currentIndex = pages.findIndex((page) => page.uri === pathname);
    const previousIndex = (currentIndex - 1 + pages.length) % pages.length;
    const nextIndex = (currentIndex + 1) % pages.length;
    const [direction, setDirection] = useState("left");
    const [video, setVideo] = useState("/video/@2x.mp4");
    const [leftImage, setLeftImage] = useState("/video/contact@2x.mp4.jpg");
    const [rightImage, setRightImage] = useState("/video/wie-ben-ik@2x.mp4.jpg");

    useEffect(() => {
        transitions.slideIntoViewport();
        setVideo(`/video${pages[currentIndex].uri}@2x.mp4`);
        setLeftImage(`/video${pages[previousIndex].uri}@2x.mp4.jpg`);
        setRightImage(`/video${pages[nextIndex].uri}@2x.mp4.jpg`);
        console.log(leftImage, video, rightImage);
    }, [currentIndex]);

    async function onNext() {
        setDirection("left");
        await transitions.slideLeft();
        router.push(pages[nextIndex].uri);
    }

    async function onPrevious() {
        setDirection("right");
        await transitions.slideRight();
        router.push(pages[previousIndex].uri);
    }

    const circleVariants = {
        hidden: (customDirection) => ({
            x: customDirection === "left" ? "100vw" : "-100vw",
            rotate: customDirection === "left" ? 180 : -180,
            opacity: 0,
        }),
        visible: {
            x: 0,
            rotate: 0,
            opacity: 1,
        },
        exit: (customDirection) => ({
            x: customDirection === "left" ? "-100vw" : "100vw",
            rotate: customDirection === "left" ? -180 : 180,
            opacity: 0,
        }),
    };

    const transition = {
        type: "spring",
        stiffness: 100,
        damping: 17,
        duration: 0.5,
    };

    return (
        <div className="flex flex-col items-center relative">
            {isVisible && (
                <div className="flex items-center justify-center">
                    <motion.div
                        key={`left-${currentIndex}`}
                        custom={direction} // Pass the direction dynamically
                        variants={circleVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={transition}
                        className="w-[254px] h-[254px] z-10 -mr-10 rounded-full overflow-hidden flex items-center justify-center"
                    >
                        <Image
                            src={leftImage}
                            width={254}
                            height={254}
                            alt="Child 1"
                            className="object-cover w-full h-full opacity-50"
                        />
                    </motion.div>

                    <motion.div
                        key={`center-${currentIndex}`}
                        custom={direction} // Pass the direction dynamically
                        variants={circleVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={transition}
                        className="w-[384px] h-[384px] rounded-full overflow-hidden z-20 border-white border-8"
                    >
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover"
                        ></video>
                    </motion.div>

                    <motion.div
                        key={`right-${currentIndex}`}
                        custom={direction}
                        variants={circleVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={transition}
                        className="w-[254px] h-[254px] z-10 -ml-10 rounded-full overflow-hidden flex items-center justify-center"
                    >
                        <Image
                            src={rightImage}
                            width={254}
                            height={254}
                            alt="Child 3"
                            className="object-cover w-full h-full opacity-50"
                        />
                    </motion.div>
                </div>
            )}

            {/* Buttons */}
            <div className="flex items-center space-x-4 mt-16 skewed-button">
                <button onClick={onPrevious} className="w-10 h-10 text-white rounded-full">←</button>
                <p className="text-white">{ pages[currentIndex]?.label }</p>
                <button onClick={onNext} className="w-10 h-10  text-white rounded-full">→</button>
            </div>
        </div>
    );
}