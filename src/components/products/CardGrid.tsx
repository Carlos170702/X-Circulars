import { NextPage } from "next";

interface Props {
    children: React.ReactNode;
}

export const CardGrid: NextPage<Props> = ({ children }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {children}
        </div>

    )
}