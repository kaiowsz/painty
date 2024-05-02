import Navbar from "@/components/shared/Navbar";
import OrganizationSidebar from "@/components/shared/OrganizationSidebar";
import Sidebar from "@/components/shared/Sidebar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({children}: DashboardLayoutProps) => {
    return (
        <main className="h-full">
            <Sidebar />
            <div className="pl-[60px] h-full">
                <div className="flex gap-x-3 h-full">
                    <OrganizationSidebar />
                    <div className="h-full flex-1">
                        <Navbar />
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DashboardLayout;