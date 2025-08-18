import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/lab-sidebar"
import { AppHeader } from "./components/lab-header"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
