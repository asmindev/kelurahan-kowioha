import OrgChart from "@/components/ui/org";
import Layout from "@/layout";
import React from "react";
import Maps from "../Place/maps";

const addClass = (content) => {
    let mission = content;
    mission = mission.replace(
        /<ol>/g,
        `<ol class="list-decimal ml-4 space-y-4">`
    );
    return mission;
};

export default function Profile({ content = {}, staff }) {
    console.log(staff);
    return (
        <Layout>
            <section className="w-full h-[80vh] relative ">
                <img
                    className="w-full h-full object-cover object-bottom"
                    src="https://res.cloudinary.com/dwcdtvmyy/image/upload/v1725835338/WhatsApp_Image_2024-09-09_at_06.40.08_ko2jyd.jpg"
                    alt="Lambang"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
                    <div className="w-full flex items-center justify-center text-center">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-black uppercase text-white">
                                Profil {content?.village_name}
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
                                className="w-full h-full object-contain"
                                src="https://upload.wikimedia.org/wikipedia/commons/2/21/Lambang_Kab_Kolaka.png"
                                alt="Logo"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="w-full">
                                <h1 className="text-2xl font-bold">Visi</h1>
                                <p
                                    className="text-gray-600 text-xl font-medium"
                                    dangerouslySetInnerHTML={{
                                        __html: content?.vision || "",
                                    }}
                                />
                            </div>
                            <div className="w-full mt-4">
                                <h1 className="text-2xl font-bold">Misi</h1>
                                <p
                                    className="text-gray-600 text-xl font-medium"
                                    dangerouslySetInnerHTML={{
                                        __html: addClass(
                                            content?.mission || ""
                                        ),
                                    }}
                                ></p>
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
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </section>
            <section className="w-full md:w-10/12 lg:w-8/12 mx-auto min-h-[80vh] flex items-center">
                <div className="w-full">
                    <h1 className="text-3xl font-bold text-center underline underline-offset-2">
                        Peta Lokasi {content?.village_name}
                    </h1>
                    <div className="mt-4 w-full h-96">
                        <Maps />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
