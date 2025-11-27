"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = ["hero", "shop", "story", "note"];

export default function Sidebar() {

    const [active, setActive] = useState<string>("hero");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                // root: null,
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0,
                // rootMargin: "-4rem 0px 0px 0px", // adjust for fixed header height
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <aside
            className={`
        fixed left-0 top-0 h-full w-50
        border-r border-gray-300
        z-10 flex flex-col
      `}
        >
            <div className="px-4 py-4 text-gray-200">
                51.5072° N, 0.1276° W
            </div>
            <div className="text-xl lg:text-2xl px-4 py-8 font-semibold text-gray-800 [font-family:var(--font-impact)]">
                <Link href="/">
                    Blood of Our Enemies
                </Link>

            </div>
            <nav className="flex-1 px-4 py-6 space-y-3 text-sm">
                {sections.map((id) => (
                    <Link
                        key={id}
                        href={`#${id}`}
                        className={`
              block transition-colors
              ${active === id ? "text-black font-medium" : "text-gray-400"}
            `}
                    >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
