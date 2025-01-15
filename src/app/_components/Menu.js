'use client';

import Link from "next/link";
import { pages } from "@/app/_components/Hero"; // Assuming pages is exported from Hero
import { usePathname } from "next/navigation";

export default function Menu() {
    const pathname = usePathname();

    // Helper function to check if a page or its children match the current pathname
    const isActive = (page) => {
        if (pathname === page.uri) {
            return true;
        }
        // Check if any child matches
        if (page.children) {
            return Object.keys(page.children).some((childKey) => pathname.startsWith(page.children[childKey].uri));
        }
        return false;
    };

    return (
        <menu className="flex justify-between sm:justify-start text-xl sm:text-sm my-4 sm:my-0">
            {Object.keys(pages).map((key) => {
                const page = pages[key];
                return (
                    <Link
                        key={page.uri}
                        href={page.uri}
                        className={`mr-2 ${isActive(page) ? 'text-red-500' : ''}`}
                    >
                        {page.label}
                    </Link>
                );
            })}
        </menu>
    );
}