import Layout from "@/layout";
import { formatDate } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { User2Icon } from "lucide-react";
import React from "react";

export default function Page({ news }) {
    return (
        <Layout>
            <div className="w-full md:w-8/12 lg:w-1/2 mx-auto px-4 md:px-0 divide-y space-y-8">
                {news.map((item) => (
                    <div key={item.id}>
                        <Link
                            href={`/berita/${item.slug}`}
                            className="block w-full h-full py-2 group transition-all duration-300"
                        >
                            <div className="flex gap-x-4">
                                <div className="w-1/4 h-36">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex-1">
                                        <h1 className="text-xl font-bold text-gray-600 group-hover:text-gray-700 transition-all duration-300">
                                            {item.title}
                                        </h1>
                                        <p className="mt-2 text-sm line-clamp-3 text-justify text-gray-500 group-hover:text-gray-600 transition-all duration-300">
                                            {item.content}
                                        </p>
                                    </div>
                                    <div className="flex justify-between">
                                        <h3 className="flex gap-1 items-center text-gray-500 text-sm">
                                            <span>
                                                <User2Icon size={16} />
                                            </span>
                                            {item.author}
                                        </h3>
                                        <time
                                            dateTime={item.created_at}
                                            className="text-gray-500 group-hover:text-gray-600 block text-sm font-medium transition-all duration-300"
                                        >
                                            {formatDate(item.created_at)}
                                        </time>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
