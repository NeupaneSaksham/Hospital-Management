
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../../components/pharmacy-sidebar";
import { Outlet } from "react-router-dom";


export default function SettingsLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full overflow-hidden">
        <AppSidebar />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
}
