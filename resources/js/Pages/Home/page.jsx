import React from "react";
import Layout from "../../layout";
import Slider from "./slider";
import News from "./news";
import Activity from "./activity";
import OrgChart from "@/components/ui/org";
import { Link } from "@inertiajs/react";

export default function Page({ lastNews, lastActivity, content = {} }) {
    console.log({ content });
    return (
        <Layout>
            <section className="w-full min-h-[80vh] flex items-center py-8">
                <div>
                    <div className="w-full my-4 px-4 md:px-0 md:w-11/12 mx-auto">
                        <h4 className="text-base">Selamat Datang</h4>
                        <h1 className="text-3xl font-bold">
                            Di Website Resmi {content?.village_name}
                        </h1>
                    </div>
                    <div className="w-full">
                        <Slider data={content?.image_sliders || []} />
                    </div>
                </div>
            </section>
            <section className="w-full min-h-[80vh] flex items-center bg-gray-50 py-8">
                <div className="w-full md:w-10/12 lg:w-8/12 mx-auto px-4 mt-12">
                    <div className="w-full flex flex-col md:flex-row gap-12">
                        <div className="w-fit">
                            <img
                                className="size-96 object-cover"
                                src={`/storage/${content?.image_head_of_village}`}
                                alt="Profil"
                            />
                        </div>
                        <div className="flex-1 w">
                            <h1 className="text-xl font-medium">
                                Sambutan Kelurahan
                            </h1>
                            <h2 className="text-4xl font-bold">
                                {content?.head_of_village}
                            </h2>
                            <h3>{content?.village_name}</h3>
                            <p
                                className="mt-4 text-gray-600 text-base text-justify leading-relaxed"
                                dangerouslySetInnerHTML={{
                                    __html: content?.opening_remarks,
                                }}
                            />
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
                            <p
                                className="text-gray-500 leading-relaxed mt-4 text-justify"
                                dangerouslySetInnerHTML={{
                                    __html: content?.about_village,
                                }}
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h1 className="text-4xl font-semibold">
                                {content?.village_name}
                            </h1>
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
                                        Daftar Wisata di {content?.village_name}
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="min-h-[80vh] flex items-center">
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
            </section> */}
            <section className="min-h-[80vh] flex items-center">
                <div className="w-full">
                    <div className="text-center mt-12">
                        <h1 className="text-3xl font-bold text-gray-600">
                            Berita Terkini
                        </h1>
                        <p className="text-gray-500">
                            Berita Terbaru di {content?.village_name}
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
                            Aktivitas Terbaru di {content?.village_name}
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
