
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/pharmacy-sidebar"
import { AppHeader } from "./components/pharmacy-header"
import { Outlet } from "react-router-dom"
import * as React from "react"

interface PageLayoutProps {
  children?: React.ReactNode
}

export default function Layout({ children }: PageLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 bg-gray-50">
          {children || <Outlet />}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}