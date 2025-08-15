import { Icon } from "@iconify/react"
import { NavLink, useLocation } from "react-router-dom"
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Navigation items for Settings
const navigationItems = [
  
    {
    title: "Lab",
    icon: "mdi:flask",
    url: "/admin/settings/lab",
  },
    {
    title: "Radiology",
    icon: "medical-icon:i-radiology",
    url: "/admin/settings/radiology",
  },
    {
    title: "Inpatient Services",
    icon: "medical-icon:inpatient",
    url: "/admin/settings/inpatient-services",
  },
    {
    title: "Operation",
    icon: "medical-icon:i-surgery",
    url: "/admin/settings/operation",
  },
  {
    title: "Department",
    icon: "fa6-solid:user-doctor",
    url: "/admin/settings/department",
  },

  {
    title: "Pharmacy",
    icon: "mdi:pill",
    url: "/admin/settings/pharmacy",
  },
  {
    title: "Discharge",
    icon: "mdi:account-arrow-down",
    url: "/admin/settings/discharge",
  },
  {
    title: "Receptionist",
    icon: "medical-icon:i-registration",
    url: "/admin/settings/receptionist",
  },
  {
    title: "Emergency",
    icon: "material-symbols:e911-emergency",
    url: "/admin/settings/emergency",
  },
  {
    title: "Others",
    icon: "subway:add-1",
    url: "/admin/settings/others",
  },
]

export function SettingSidebar() {
  const { pathname } = useLocation()
  
  return (
    <div className="min-w-[240px] w-[240px] border-r border-gray-200 bg-white h-full overflow-auto shadow-lg md:shadow-none">
      {/* Sidebar Header */}
      <SidebarHeader className="h-12 border-none border-gray-200 bg-white px-4 pt-2">
        <h3 className="text-lg font-bold text-[#0ABAB5] truncate">Settings</h3>
      </SidebarHeader>
      
      {/* Sidebar Menu */}
 <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className="rounded-none text-gray-700 hover:bg-teal-50 hover:text-teal-700 data-[active=true]:text-[#2DDBD5] data-[active=true]:[background:linear-gradient(to_right,_rgba(45,219,213,0.5)_0%,_rgba(176,234,233,0.5)_50%,_rgba(255,255,255,0)_100%)]"
                    >
                      <NavLink to={item.url} className="flex items-center gap-3">
                        <Icon 
                          icon={item.icon} 
                          width="24" 
                          height="24" 
                          color={isActive ? "#0ABAB5" : "#7f8080"} 
                        />
                        <span className={`${isActive ? "text-[#0ABAB5]" : "text-[#7f8080]"} font-[400]`}>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </div>
  )
}
