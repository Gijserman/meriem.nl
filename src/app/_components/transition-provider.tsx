"use client";

import React, { useState, useRef } from "react";
import { Animation, TransitionContext } from "../_context/transition-context";
import classNames from "classnames";

export function TransitionProvider({
                                       children,
                                       containerClassName,
                                   }: React.PropsWithChildren<{
    containerClassName: string;
}>) {
    const [className, setClassName] = useState("");
    const animation = useRef<Animation>("slide-left");

    return (
        <TransitionContext.Provider
            value={{
                className,
                setClassName,
                animation,
            }}
        >
            <div className={classNames(className, containerClassName)}>
                {React.Children.map(children, (child) => {
                    if (
                        React.isValidElement(child) &&
                        (child.props as { "data-static"?: boolean })?.["data-static"]
                    ) {
                        return child;
                    }
                    return child;
                })}
            </div>
        </TransitionContext.Provider>
    );
}