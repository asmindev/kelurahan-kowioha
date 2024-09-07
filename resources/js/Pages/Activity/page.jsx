import Layout from "@/layout";
import React from "react";

export default function Activity({ activity }) {
    return (
        <Layout>
            <div className="w-full md:w-8/12 lg:w-1/2 mx-auto px-4 md:px-0">
                <div className="my-8 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-">
                    {activity.map((item) => (
                        <div key={item.id} className="mb-4">
                            <img
                                src={`/storage/${item.image}`}
                                alt={item.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
