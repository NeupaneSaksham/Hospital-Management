import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"
import { AppSidebar } from "./components/admin-sidebar"
import { AppHeader } from "./components/admin-header"

export default function Layout() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 p-0 bg-white">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
