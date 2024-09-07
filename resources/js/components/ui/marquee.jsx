"use client";
import React, { useState, useEffect } from "react";
import { Splide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

export default function Marquee({ children, options }) {
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <section className="w-full pt-2 mt-4">
            <Splide
                extensions={{ AutoScroll }}
                aria-labelledby="My marquee"
                options={{
                    type: options?.type || "loop",
                    arrows: options?.arrows || false,
                    perPage: windowWidth > 768 ? 5 : 3,
                    speed: options?.speed || 500,
                    pagination: options?.pagination || false,
                    pauseOnHover: options?.pauseOnHover || false,
                    pauseOnFocus: options?.pauseOnFocus || false,
                    gap: options?.gap || 10,
                    ...options,
                }}
            >
                {children}
            </Splide>
        </section>
    );
}
