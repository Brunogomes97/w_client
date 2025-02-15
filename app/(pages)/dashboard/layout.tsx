import Header from "@/components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Gestão de Notas",
};

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const user = {
        username: "John Doe",
        email: "dIv0S@example.com",
        id: "123",
    }

    return (
        <>
            <Header user={user} />
            <div className="flex h-full my-0 mx-auto max-w-[1556px]">
                {/* <Sidebar /> */}
                <main className="w-full pt-16">{children}</main>
            </div>
        </>
    );
}
