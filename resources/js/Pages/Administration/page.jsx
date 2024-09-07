import Layout from "@/layout";
import React from "react";

const Card = ({ item }) => {
    console.log(item);
    return (
        <div className="w-full h-full">
            <h1 className="text-lg md:text-xl font-bold text-gray-700">
                {item.name}
            </h1>
            <ul className="mt-2 list-outside list-decimal ml-4">
                {item.terms.map((term) => (
                    <li
                        key={term.id}
                        className="text-sm text-gray-600 capitalize"
                    >
                        {term.file}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default function Page({ data }) {
    return (
        <Layout>
            <section className="w-full md:w-10/12 lg:w-8/12 mx-auto px-4 md:px-0">
                <h1 className="mt-12 text-xl md:text-2xl font-bold uppercase">
                    Pelayanan Administrasi di Kelurahan Kowioha
                </h1>

                <div className="w-full h-full  min-h-[70vh] flex items-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                        {data.map((item) => (
                            <Card key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
