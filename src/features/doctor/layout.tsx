import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/doctor-sidebar"
import { AppHeader } from "./components/doctor-header"

export default function Layout() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 bg-gray-50">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
