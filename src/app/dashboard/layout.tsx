import { NavBar } from "@/components/NavBar";
import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen w-screen grid md:grid-cols-[auto,1fr] grid-cols-1 overflow-hidden">
            <Sidebar />
            <div className="flex-1 overflow-x-auto col-start-2">
                <NavBar />
                {children}
            </div>
        </div>
    );
}