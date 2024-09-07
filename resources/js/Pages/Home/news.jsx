import Marquee from "@/components/ui/marquee";
import { formatDate } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { SplideSlide } from "@splidejs/react-splide";
import React from "react";

export default function News({ data }) {
    return (
        <Marquee>
            {data.map((item, index) => (
                <SplideSlide key={index}>
                    <Link
                        href={`/berita/${item.slug}`}
                        className="w-full h-full border rounded-xl px-3 py-4 group transition-all duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <h1 className="line-clamp-1 text-lg md:text-xl font-bold text-gray-400 group-hover:text-gray-700 transition-all duration-300">
                                {item.title}
                            </h1>
                            <p className="mt-2 text-sm line-clamp-2 md:line-clamp-3 text-justify text-gray-300 group-hover:text-gray-600 transition-all duration-300">
                                {item.content}
                            </p>
                        </div>
                        <div>
                            <span className="text-gray-300 group-hover:text-gray-600 mt-4 block text-xs md:text-sm font-medium transition-all duration-300">
                                {formatDate(item.created_at)}
                            </span>
                        </div>
                    </Link>
                </SplideSlide>
            ))}
        </Marquee>
    );
}
