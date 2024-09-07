import { Link } from "@inertiajs/react";
import React, { useEffect } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
    const isActive = (path) => {
        const params = new URL(window.location.href);
        return params.pathname === path;
    };

    return (
        <div className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-4">
            <nav className="w-full lg:w-8/12 mx-auto flex justify-between items-end px-4 gap-x-2">
                <div className="w-full md:w-1/3">
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
                    <div className="hidden md:flex justify-end gap-4 ">
                        <Link
                            href="/"
                            className={` ${
                                isActive("/")
                                    ? "text-red-400"
                                    : "text-gray-400 hover:text-gray-900"
                            }`}
                        >
                            Beranda
                        </Link>
                        <Link
                            href="/profil-kelurahan"
                            className={` ${
                                isActive("/profil-kelurahan")
                                    ? "text-red-400"
                                    : "text-gray-400 hover:text-gray-900"
                            }`}
                        >
                            Profil Kelurahan
                        </Link>
                        <Link
                            href="/struktur-organisasi"
                            className={` ${
                                isActive("/struktur-organisasi")
                                    ? "text-red-400"
                                    : "text-gray-400 hover:text-gray-900"
                            }`}
                        >
                            Struktur Organisasi
                        </Link>
                        <Link
                            href="/berita"
                            className={` ${
                                isActive("/berita")
                                    ? "text-red-400"
                                    : "text-gray-400 hover:text-gray-900"
                            }`}
                        >
                            Berita
                        </Link>
                        <Link
                            href="/aktivitas"
                            className={` ${
                                isActive("/aktivitas")
                                    ? "text-red-400"
                                    : "text-gray-400 hover:text-gray-900"
                            }`}
                        >
                            Aktivitas
                        </Link>
                        <Link
                            href="/lokasi"
                            className={` ${
                                isActive("/lokasi")
                                    ? "text-red-400"
                                    : "text-gray-400 hover:text-gray-900"
                            }`}
                        >
                            Lokasi
                        </Link>
                        <Link
                            href="/pelayanan"
                            className={` ${
                                isActive("/pelayanan")
                                    ? "text-red-400"
                                    : "text-gray-400 hover:text-gray-900"
                            }`}
                        >
                            Pelayanan
                        </Link>
                    </div>
                    <Sheet
                        className="md:hidden z-[999999999999999]"
                        side="left"
                    >
                        <SheetTrigger>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                                />
                            </svg>
                        </SheetTrigger>
                        <SheetContent className="">
                            <SheetHeader>
                                <SheetTitle className="text-2xl font-black text-left uppercase text-gray-800 leading-3">
                                    Kowioha
                                </SheetTitle>
                                <SheetDescription className="text-left">
                                    Kec. Wundulako, Kabupaten Kolaka.
                                </SheetDescription>
                            </SheetHeader>
                            <SheetDescription className="h-full">
                                <div className="mt-8 flex h-2/5 flex-col justify-between">
                                    <Link
                                        href="/"
                                        className={`text-3xl font-extrabold ${
                                            isActive("/")
                                                ? "text-red-400"
                                                : "text-gray-400 hover:text-gray-900"
                                        }`}
                                    >
                                        Beranda
                                    </Link>
                                    <Link
                                        href="/profil-kelurahan"
                                        className={`text-3xl font-extrabold ${
                                            isActive("/profil-kelurahan")
                                                ? "text-red-400"
                                                : "text-gray-400 hover:text-gray-900"
                                        }`}
                                    >
                                        Profil Kelurahan
                                    </Link>
                                    <Link
                                        href="/struktur-organisasi"
                                        className={`text-3xl font-extrabold ${
                                            isActive("/struktur-organisasi")
                                                ? "text-red-400"
                                                : "text-gray-400 hover:text-gray-900"
                                        }`}
                                    >
                                        Struktur Organisasi
                                    </Link>
                                    <Link
                                        href="/berita"
                                        className={`text-3xl font-extrabold ${
                                            isActive("/berita")
                                                ? "text-red-400"
                                                : "text-gray-400 hover:text-gray-900"
                                        }`}
                                    >
                                        Berita
                                    </Link>
                                    <Link
                                        href="/aktivitas"
                                        className={`text-3xl font-extrabold ${
                                            isActive("/aktivitas")
                                                ? "text-red-400"
                                                : "text-gray-400 hover:text-gray-900"
                                        }`}
                                    >
                                        Aktivitas
                                    </Link>
                                    <Link
                                        href="/lokasi"
                                        className={`text-3xl font-extrabold ${
                                            isActive("/lokasi")
                                                ? "text-red-400"
                                                : "text-gray-400 hover:text-gray-900"
                                        }`}
                                    >
                                        Lokasi
                                    </Link>
                                    <Link
                                        href="/pelayanan"
                                        className={`text-3xl font-extrabold ${
                                            isActive("/pelayanan")
                                                ? "text-red-400"
                                                : "text-gray-400 hover:text-gray-900"
                                        }`}
                                    >
                                        Pelayanan
                                    </Link>
                                </div>
                            </SheetDescription>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </div>
    );
}
