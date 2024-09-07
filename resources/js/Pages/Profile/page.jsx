import OrgChart from "@/components/ui/org";
import Layout from "@/layout";
import React from "react";
import Maps from "../Place/maps";

export default function Profile() {
    return (
        <Layout>
            <section className="w-full h-[80vh] relative ">
                <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdyb3VwfGVufDB8fDB8fHww"
                    alt="Lambang"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
                    <div className="w-full flex items-center justify-center text-center">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-black uppercase text-white">
                                Profil kelurahan Kowioha
                            </h1>
                            <h2 className="text-3xl text-white uppercase font-black">
                                Kecamatan Wundulako, Kabupaten Kolaka
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full md:w-10/12 lg:w-8/12 mx-auto min-h-[80vh] flex items-center px-4 md:px-0">
                <div className="w-full">
                    <h1 className="text-3xl font-bold text-center underline underline-offset-2">
                        Visi & Misi
                    </h1>
                    <div className="mt-4 flex flex-col md:flex-row gap-x-20">
                        <div className="w-full md:w-1/2">
                            <img
                                className="w-full h-full object-cover"
                                src="https://upload.wikimedia.org/wikipedia/commons/2/21/Lambang_Kab_Kolaka.png"
                                alt="Logo"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="w-full">
                                <h1 className="text-2xl font-bold">Visi</h1>
                                <p className="text-gray-600 text-xl font-medium">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolorem maxime dolor
                                    libero veniam odio nam! Adipisci,
                                    perferendis.
                                </p>
                            </div>
                            <div className="w-full mt-4">
                                <h1 className="text-2xl font-bold">Misi</h1>
                                <ul className="list-decimal list-outside ml-6 md:ml-4">
                                    <li className="text-gray-600 text-xl font-medium">
                                        Lorem ipsum dolor sit amet.
                                    </li>
                                    <li className="text-gray-600 text-xl font-medium">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing.
                                    </li>
                                    <li className="text-gray-600 text-xl font-medium">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </li>
                                    <li className="text-gray-600 text-xl font-medium">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Corporis, excepturi.
                                    </li>
                                    <li className="text-gray-600 text-xl font-medium">
                                        Lorem ipsum dolor sit amet.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full md:w-10/12 lg:w-8/12 mx-auto min-h-[80vh] flex items-center px-4 md:px-0">
                <iframe
                    className="w-full h-96"
                    src="https://www.youtube.com/embed/feceoLwv08M?si=VhcwuNA08Ej0gzLu"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </section>
            <section className="w-full md:w-10/12 lg:w-8/12 mx-auto min-h-[80vh] flex items-center px-4 md:px-0">
                <div className="w-full">
                    <h1 className="text-3xl font-bold text-center underline underline-offset-2">
                        Struktur Organisasi Kelurahan Kowioha
                    </h1>
                    <div className="mt-4 w-full h-96">
                        <OrgChart />
                    </div>
                </div>
            </section>
            <section className="w-full md:w-10/12 lg:w-8/12 mx-auto min-h-[80vh] flex items-center">
                <div className="w-full">
                    <h1 className="text-3xl font-bold text-center underline underline-offset-2">
                        Peta Lokasi Kelurahan Kowioha
                    </h1>
                    <div className="mt-4 w-full h-96">
                        <Maps />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
