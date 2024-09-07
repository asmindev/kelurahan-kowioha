import React from "react";
import Layout from "../../layout";
import Slider from "./slider";
import News from "./news";
import Activity from "./activity";
import OrgChart from "@/components/ui/org";
import { Link } from "@inertiajs/react";

export default function Page({ lastNews, lastActivity }) {
    return (
        <Layout>
            <section className="w-full min-h-[80vh] flex items-center py-8">
                <div>
                    <div className="w-full my-4 px-4 md:px-0 md:w-11/12 mx-auto">
                        <h4 className="text-base">Selamat Datang</h4>
                        <h1 className="text-3xl font-bold">
                            Di Website Resmi Kelurahan Kowioha
                        </h1>
                    </div>
                    <div className="w-full">
                        <Slider />
                    </div>
                </div>
            </section>
            <section className="w-full min-h-[80vh] flex items-center bg-gray-50 py-8">
                <div className="w-full md:w-10/12 lg:w-8/12 mx-auto px-4 mt-12">
                    <div className="w-full flex flex-col md:flex-row gap-12">
                        <div className="w-fit">
                            <img
                                className="size-96 object-cover"
                                src="https://plus.unsplash.com/premium_photo-1682437826626-044d1234806d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvbWVuJTIwY2FyZWVyfGVufDB8fDB8fHww"
                                alt="Profil"
                            />
                        </div>
                        <div className="flex-1 w">
                            <h1 className="text-xl font-medium">
                                Sambutan Kelurahan
                            </h1>
                            <h2 className="text-4xl font-bold">
                                Nurliati, SE.
                            </h2>
                            <h3>Lurah Kowioha</h3>
                            <p className="mt-4 text-gray-600 text-base text-justify leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Eveniet nulla deserunt aliquid
                                sunt ex odio esse corrupti. Illum assumenda
                                quisquam corrupti nisi. Sapiente velit nemo
                                animi explicabo consectetur perspiciatis iste
                                omnis, illo enim impedit? Aut iste eum rem minus
                                ab quis aspernatur nam nesciunt, assumenda
                                molestiae, error et officiis voluptate. Lorem
                                ipsum dolor sit amet consectetur, adipisicing
                                elit. Molestiae, veritatis facilis odio totam
                                esse incidunt, ipsum illo optio dolores
                                molestias atque sint! Vero laboriosam excepturi
                                fugiat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="min-h-[80vh] flex items-center">
                <div className="w-full md:w-10/12 mx-auto px-4 mt-12">
                    <div className="flex flex-col md:flex-row gap-8 py-8">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-3xl font-bold text-gray-700">
                                Jelajahi Kelurahan
                            </h1>
                            <p className="text-gray-500 leading-relaxed mt-4 text-justify">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Pariatur sunt laborum
                                dignissimos, fugit, consequatur vitae nihil
                                dicta non hic, suscipit accusantium magni quo?
                                Ratione voluptatum quidem reiciendis nesciunt
                                maiores ea. Dolor eveniet consequatur obcaecati
                                optio beatae reprehenderit laborum vel maxime
                                dolorum ullam nam numquam corporis vitae modi,
                                dolores aspernatur facere.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h1 className="text-4xl font-semibold">Kowioha</h1>
                            <div className="grid grid-cols-2 gap-2 md:gap-4 auto-rows-fr">
                                <Link
                                    href="/lokasi?tab=wisata"
                                    className="w-full mt-4 p-3 rounded-md border"
                                >
                                    <h1 className="text-xl font-bold">
                                        Wisata Desa
                                    </h1>
                                    <p className="text-sm text-gray-600">
                                        Daftar Wisata di Kelurahan Kowioha
                                    </p>
                                </Link>
                                <Link
                                    href="/lokasi?tab=situs"
                                    className="w-full mt-4 p-3 rounded-md border"
                                >
                                    <h1 className="text-xl font-bold">
                                        Situs Sejarah
                                    </h1>
                                    <p className="text-sm text-gray-600">
                                        Daftar Wisata di Kelurahan Kowioha
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="min-h-[80vh] flex items-center">
                <div className="w-full">
                    <div className="text-center mt-12">
                        <h1 className="text-3xl font-bold text-gray-600">
                            Pengurus Kelurahan
                        </h1>
                        <p className="text-gray-500">
                            Daftar Pengurus Kelurahan Kowioha
                        </p>
                    </div>
                    <div className="w-full md:w-10/12 mx-auto px-4 mt-12 h-[50vh]">
                        <OrgChart />
                    </div>
                </div>
            </section>
            <section className="min-h-[80vh] flex items-center">
                <div className="w-full">
                    <div className="text-center mt-12">
                        <h1 className="text-3xl font-bold text-gray-600">
                            Berita Terkini
                        </h1>
                        <p className="text-gray-500">
                            Berita Terbaru di Kelurahan Kowioha
                        </p>
                    </div>
                    <div className="relative w-full md:w-10/12 mx-auto px-4 mt-12 before:content-[''] before:absolute before:z-10 before:top-0 before:left-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-white before:via-white before:to-transparent after:content-[''] after:absolute after:z-10 after:top-0 after:right-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-white after:via-white after:to-transparent">
                        <News data={lastNews} />
                    </div>
                </div>
            </section>
            <section className="min-h-[80vh] flex items-center">
                <div className="w-full">
                    <div className="text-center mt-12">
                        <h1 className="text-3xl font-bold text-gray-600">
                            Kegiatan Terbaru
                        </h1>
                        <p className="text-gray-500">
                            Aktivitas Terbaru di Kelurahan Kowioha
                        </p>
                    </div>
                    <div className="relative w-full md:w-10/12 mx-auto px-4 mt-12 before:content-[''] before:absolute before:z-10 before:top-0 before:left-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-white before:via-white before:to-transparent after:content-[''] after:absolute after:z-10 after:top-0 after:right-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-white after:via-white after:to-transparent">
                        <Activity data={lastActivity} />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
