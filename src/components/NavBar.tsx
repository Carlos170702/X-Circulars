import Image from "next/image";

export const NavBar = () => {
    return (
        <nav className="bg-gray-50 border-b border-gray-200">
            <div className="flex justify-end items-center mx-auto p-4">
                <div className="flex items-center gap-2">
                    <span className="text-gray-600 text-sm">Carlos Daniel</span>
                    <Image
                        className="w-10 h-10 rounded-full border p-1"
                        src="/profile_img.png"
                        alt="User Photo"
                        height={40}
                        width={40}
                    />
                </div>
            </div>
        </nav>
    );
};
