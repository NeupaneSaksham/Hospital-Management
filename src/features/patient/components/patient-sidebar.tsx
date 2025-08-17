import { Icon } from "@iconify/react"
import makaluLogo from "@/assets/makalu-logo.png"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavLink, useLocation } from "react-router-dom"

// Navigation items
const navigationItems = [
  {
    title: "Visits",
    icon: "mdi:person-clock-outline",
    url: "/patient/visit",
    isActive: true,
  
  },
  {
    title: "Medical History",
    icon: "ic:outline-history",
    url: "/patient/medical-history",
   
  },
  {
    title: "Reports",
    icon: "carbon:report-data",
    url: "/patient/reports",
   
  },
  {
    title: "Billing",
    icon: "medical-icon:billing",
    url: "/patient/billing",
   
  },
  

 
]

export function AppSidebar() {
  const { pathname } = useLocation()
  return (
    <Sidebar className="border-r border-gray-200 bg-white" >
      <SidebarHeader className="h-18 border-b border-gray-200 bg-white" >
        <div className="flex items-center gap-3 px-4">
          <img src={makaluLogo} alt="Makalu Everest Hospital" className="w-14 h-14 object-contain flex-shrink-0" />
          <div className="flex flex-col min-w-0 items-center">
            <span className="text-lg font-bold text-[#0ABAB5] truncate">MAKALU</span>
            <span className="text-xs text-[#0ABAB5] font-medium truncate">EVEREST HOSPITAL</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
               const isParentActive = pathname === item.url
                return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isParentActive}
                    className="rounded-none text-gray-700 hover:bg-teal-50 hover:text-teal-700 data-[active=true]:text-[#2DDBD5] data-[active=true]:[background:linear-gradient(to_right,_rgba(45,219,213,0.5)_0%,_rgba(176,234,233,0.5)_50%,_rgba(255,255,255,0)_100%)]"
                  >
                    <NavLink to={item.url} className="flex items-center gap-3">
                      <Icon icon={item.icon} width="24" height="24" color={isParentActive ? "#0ABAB5" : "#7f8080"} />
                      <span className={`${isParentActive ? "text-[#0ABAB5]" : "text-[#7f8080]"} font-[400]`}>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>

                </SidebarMenuItem>
              )})}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

