import Layout from "@/layout";
import { formatDate } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Detail({ news, last }) {
    console.log(news);
    return (
        <Layout>
            <div className="w-full md:w-8/12 mx-auto px-4 md:px-0">
                <div className="flex gap-8 my-8">
                    <div className="flex-1">
                        <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-96 object-cover"
                        />
                        <div className="flex justify-between items-end my-4">
                            <div>
                                <h1 className="text-xl font-bold">
                                    {news.title}
                                </h1>
                                <h3 className="text-gray-600 text-xs">
                                    {formatDate(news.created_at)}
                                </h3>
                            </div>
                            <div>
                                <h3 className="text-gray-600 text-xs">
                                    {news.author}
                                </h3>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">
                            {news.content}
                        </p>
                    </div>
                    <div className="w-1/5">
                        <h1 className="text-xl mb-2 font-bold text-gray-600">
                            Terbaru
                        </h1>
                        <div className="divide-y space-y-1">
                            {last.map((item) => (
                                <div key={item.id}>
                                    <Link href={`/berita/${item.slug}`}>
                                        <h1 className="text-sm font-semibold line-clamp-1">
                                            {item.title}
                                        </h1>
                                        <p className="text-xs text-gray-600 line-clamp-1">
                                            {item.content}
                                        </p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
