'use client'

import Link from "next/link";
import { PathNavigation } from '../interface/index';
import { Logo } from "./Logo";

export const Sidebar = () => {
    return (
        <div className="w-64 h-screen transition-transform -translate-x-full md:translate-x-0 shadow-xl">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                <ul className="space-y-4 font-medium">
                    <li className="mb-8">
                        <Logo />
                    </li>
                    <li>
                        <Link href={PathNavigation.PRODUCTS} className="flex items-center p-2 text-gray-800 rounded-lg hover:bg-gray-200 group">
                            <svg
                                className="flex-shrink-0 w-5 h-5 text-pink-600 transition duration-75 group-hover:text-black"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 18"
                            >
                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                            </svg>
                            <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
