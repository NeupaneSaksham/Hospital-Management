import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/patient-sidebar"
import { AppHeader } from "./components/patient-header"
import { Outlet } from "react-router-dom"


export default function Layout(){
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <Outlet/>
      </SidebarInset>
    </SidebarProvider>
  )
}
