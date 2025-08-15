"use client"
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function ModelsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get("category") || "all";

    const categories = [
        { id: "all", name: "ALL" },
        { id: "3d-printer", name: "3D PRINTER" },
        { id: "art", name: "ART" },
        { id: "education", name: "EDUCATION" },
        { id: "fashion", name: "FASHION" },
        { id: "hobby-diy", name: "HOBBY & DIY" },
        { id: "household", name: "HOUSEHOLD" },
        { id: "miniatures", name: "MINIATURES" },
        { id: "tools", name: "TOOLS" },
        { id: "toys-games", name: "TOYS & GAMES" }
    ];

    return (
        <div className="min-h-screen">
            {/* Mobile Category Filter Bar */}
            <div className="lg:hidden bg-white border-b border-gray-200 sticky top-16 z-30">
                <div className="px-4 py-3 overflow-x-auto">
                    <div className="flex space-x-6 min-w-max">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={`/models?category=${category.id}`}
                                className={`uppercase tracking-wide text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                                    currentCategory === category.id
                                        ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                                        : "text-gray-700 hover:text-orange-500"
                                }`}
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop Layout with Sidebar */}
            <div className="hidden lg:flex min-h-screen">
                {/* Side Navigation */}
                <nav className="w-60 bg-gray-50 p-6 flex flex-col items-start sticky top-5 h-screen overflow-y-auto">
                    <div className="text-lg font-bold mb-8 text-black">Categories</div>
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/models?category=${category.id}`}
                            className={`mb-4 px-2 py-1 transition-colors duration-200 ${
                                currentCategory === category.id
                                    ? "text-orange-500 font-medium"
                                    : "text-black hover:text-gray-300"
                            }`}
                        >
                            {category.name}
                        </Link>
                    ))}
                </nav>
                
                {/* Main Content */}
                <main className="flex-1 p-8 bg-white">
                    {children}
                </main>
            </div>

            {/* Mobile Main Content */}
            <div className="lg:hidden">
                <main className="p-4 bg-white">
                    {children}
                </main>
            </div>
        </div>
    );
}
