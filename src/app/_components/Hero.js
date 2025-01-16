'use client';

import Image from "next/image";
import { motion } from "motion/react";
import {usePathname, useRouter} from "next/navigation";
import { useState, useEffect } from "react";
import {useTransitions} from "../_hooks/use-transitions";
import { useSwipeable } from 'react-swipeable';

export const pages = {
    "/": {
        label: "Begeleiding",
        uri: "/",
        children: {}
    },
    "/wie-ben-ik": {
        label: "Wie ben ik",
        uri: "/wie-ben-ik",
        children: {
            "/rean": {
                label: "Rean",
                uri: "/rean",
            },
            "/sven": {
                label: "Sven",
                uri: "/sven",
            }
        }
    },
    "/contact": {
        label: "Contact",
        uri: "/contact",
        children: {}
    }
};

function getPageKeys(pages) {
    let keys = [];
    for (const key in pages) {
        keys.push(key);
        if (pages[key].children && Object.keys(pages[key].children).length > 0) {
            keys = keys.concat(getPageKeys(pages[key].children));
        }
    }
    return keys;
}

export function findPageByPath(pages, path) {
    for (const key in pages) {
        if (key === path) {
            return pages[key];
        }
        if (pages[key].children) {
            const childPage = findPageByPath(pages[key].children, path);
            if (childPage) {
                return childPage;
            }
        }
    }
    return null;
}

export default function Hero({ isVisible = true }) {
    const transitions = useTransitions();
    const router = useRouter();
    const pathname = usePathname();
    const pageKeys = getPageKeys(pages);
    const currentIndex = pageKeys.findIndex((key) => key === pathname);
    const previousIndex = (currentIndex - 1 + pageKeys.length) % pageKeys.length;
    const nextIndex = (currentIndex + 1) % pageKeys.length;
    const [direction, setDirection] = useState("left");
    const [video, setVideo] = useState("/video/@2x.mp4");
    const [leftImage, setLeftImage] = useState("/video/contact@2x.mp4.jpg");
    const [rightImage, setRightImage] = useState("/video/wie-ben-ik@2x.mp4.jpg");

    useEffect(() => {
        transitions.slideIntoViewport();
        setVideo(`/video${pageKeys[currentIndex]}@2x.mp4`);
        setLeftImage(`/video${pageKeys[previousIndex]}@2x.mp4.jpg`);
        setRightImage(`/video${pageKeys[nextIndex]}@2x.mp4.jpg`);
    }, [currentIndex]);

    async function onNext() {
        setDirection("left");
        await transitions.slideLeft();
        router.push(pageKeys[nextIndex]);
    }

    async function onPrevious() {
        setDirection("right");
        await transitions.slideRight();
        router.push(pageKeys[previousIndex]);
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
        stiffness: 200,
        damping: 16,
        duration: 0.5,
        delay: 0.05,
    };

    const leftTransition = {
        ...transition,
        delay: 0.1,
    };

    const videoTransition = {
        ...transition,
        delay: 0,
    };

    const currentPage = findPageByPath(pages, pathname);

    const handlers = useSwipeable({
        onSwipedLeft: onNext,
        onSwipedRight: onPrevious,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    return (
        <div className="flex flex-col items-center relative" {...handlers}>
            {isVisible && (
                <div className="flex items-center justify-center -ml-[84px] -mr-[83px]">
                    <motion.div
                        key={`left-${currentIndex}`}
                        custom={direction}
                        variants={circleVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={leftTransition}
                        onClick={onPrevious}
                        className="w-[200px] h-[200px] sm:w-[310px] sm:h-[310px] z-10 -mr-32 sm:-ml-20 md:-mr-10 mt-24 rounded-full overflow-hidden flex items-center justify-center"
                    >
                        <Image
                            src={leftImage}
                            width={310}
                            height={310}
                            alt="Child 1"
                            className="object-cover w-full h-full opacity-40 hover:opacity-60"
                            priority
                        />
                    </motion.div>

                    <motion.div
                        key={`center-${currentIndex}`}
                        custom={direction}
                        variants={circleVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={videoTransition}
                        className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden z-20 border-white border-8"
                    >
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover"
                            poster={`${video}.jpg`}
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
                        onClick={onNext}
                        className="w-[200px] h-[200px] sm:w-[310px] sm:h-[310px] z-10 -ml-32 sm:-mr-20 md:-ml-10 mt-24 rounded-full overflow-hidden flex items-center justify-center"
                    >
                        <Image
                            src={rightImage}
                            width={310}
                            height={310}
                            alt="Child 3"
                            className="object-cover w-full h-full opacity-40 hover:opacity-60"
                            priority
                        />
                    </motion.div>
                </div>
            )}

            <div className="flex items-center space-x-4 mt-16 skewed-button">
                <button onClick={onPrevious} className="w-10 h-10 text-white rounded-full">←</button>
                <p className="text-white font-bold">{ currentPage?.label }</p>
                <button onClick={onNext} className="w-10 h-10  text-white rounded-full">→</button>
            </div>
        </div>
    );
}