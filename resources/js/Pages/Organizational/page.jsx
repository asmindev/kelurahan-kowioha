import Layout from "@/layout";
import React from "react";

export default function Page({ staff }) {
    return (
        <Layout>
            <div className="w-10/12 mx-auto">
                {staff.map((item) => (
                    <div key={item.id}>
                        <div className="my-8">
                            <h1 className="mb-8 text-3xl md:text-5xl lg:text-8xl font-bold md:font-extrabold text-center underline underline-offset-2 text-gray-700">
                                {item.name}
                            </h1>
                            <img
                                className="w-full h-full object-cover"
                                src={`/storage/${item.image}`}
                                alt={item.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
