import { Link, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

export default function Header() {
    const { url } = usePage();

    const isActive = (path) => {
        return url === path ? "active" : "";
    };

    return (
        <div className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-4">
            <nav className="w-full md:w-10/12 lg:w-8/12 mx-auto flex justify-between items-end px-4 gap-x-2">
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <div>
                        <Link
                            href="/"
                            className="text-3xl lg:text-5xl text-gray-700 font-extrabold"
                        >
                            Kowioha
                        </Link>
                        <p className="pl-0.5">Kec. Wundulako, Kolaka</p>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex justify-end gap-6">
                        <Link
                            href="/"
                            className={` ${
                                isActive("/")
                                    ? "text-red-400"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            Beranda
                        </Link>
                        <Link
                            href="/profil"
                            className={` ${
                                isActive("/profil")
                                    ? "text-red-400"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            Profil Kelurahan
                        </Link>
                        <Link
                            href="/struktur-organisasi"
                            className={` ${
                                isActive("/struktur-organisasi")
                                    ? "text-red-400"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            Struktur Organisasi
                        </Link>
                        <Link
                            href="/berita"
                            className={` ${
                                isActive("/berita")
                                    ? "text-red-400"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            Berita
                        </Link>
                        <Link
                            href="/aktivitas"
                            className={` ${
                                isActive("/aktivitas")
                                    ? "text-red-400"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            Aktivitas
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
