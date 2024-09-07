import Marquee from "@/components/ui/marquee";
import { Link } from "@inertiajs/react";
import { SplideSlide } from "@splidejs/react-splide";
import React from "react";

export default function Activity({ data }) {
    return (
        <Marquee options={{ direction: "rtl", speed: 100 }}>
            {data.map((item) => (
                <SplideSlide key={item.id}>
                    <Link className="block w-full h-full border rounded-xl group transition-all duration-300">
                        <div className="w-full  h-40 md:h-56 relative group overflow-hidden text-left">
                            <img
                                src={item.image}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute -bottom-12 group-hover:bottom-0 left-0 w-full transition-all duration-300 p-0.5">
                                <div className="bg-white text-black px-2 py-1 font-medium">
                                    <p className="line-clamp-1" dir="ltr">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </SplideSlide>
            ))}
        </Marquee>
    );
}
