import React from "react";
import Footer from "./components/section/footer";
import Header from "./components/section/header";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";

export default function Layout({ children }) {
    return (
        <>
            <Toaster />
            <section className="flex min-h-screen flex-col">
                <header className="h-fit w-full sticky top-0 border-b bg-white/70 backdrop-blur-xl z-[999999]">
                    <Header />
                </header>
                <main className="flex-1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </main>
                <footer className="h-fit border-t-[1px]">
                    <Footer />
                </footer>
            </section>
        </>
    );
}
