import * as React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { cn } from "../../../lib/utils"
import { Button } from "../../../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../../../components/ui/sheet"
import { Users, List, Plus, Calendar, Heart, Settings, Menu, ChevronDown, ChevronRight, X } from "lucide-react"
import HospitalLogo from "../../../assets/hospital-logo/MAKALU-LOGO 1.svg"
import Appointment from "../pages/appointment/Appointments"

interface SidebarProps {
  className?: string
}

const sidebarItems = [
  {
    title: "Patients",
    icon: Users,
    path: "/reception/patients",
    subItems: [
      { title: "List", icon: List, path: "/reception/patients" },
      { title: "Add", icon: Plus, path: "/reception/patients/add" },
    ],
  },
  {
    title: "Appointments",
    icon: Calendar,
    path: "/reception/appointments",
    subItems: [
      { title: "List", icon: List, path: "/reception/appointments/list" },
      { title: "Shortlist", icon: Heart, path: "/reception/appointments/shortlist" },
      { title: "Manage", icon: Settings, path: "/reception/appointments/manage" },
      { title: "Create", icon: Plus, path: "/reception/appointments/create", element: <Appointment /> },
    ],
  },
]

function SidebarContent({ className }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isPathActive = (path?: string) => !!path && location.pathname.startsWith(path)

  const defaultExpanded = React.useMemo(() => {
    const expanded: number[] = []
    sidebarItems.forEach((item, idx) => {
      if (isPathActive(item.path)) expanded.push(idx)
    })
    if (expanded.length === 0) expanded.push(0)
    return expanded
  }, [location.pathname])

  const [expandedItems, setExpandedItems] = React.useState<number[]>(defaultExpanded);
  React.useEffect(() => setExpandedItems(defaultExpanded), [defaultExpanded])

  const toggleItem = (index: number) => {
    setExpandedItems(current =>
      current.includes(index) ? current.filter(i => i !== index) : [...current, index]
    )
  }

  const handleItemClick = (item: any, index: number) => {
    if (item.subItems?.length) {
      toggleItem(index)
    } else if (item.path) {
      navigate(item.path)
    }
  }

  const handleSubItemClick = (subItem: any) => {
    if (subItem.path) navigate(subItem.path)
  }

  return (
    <div className={cn("flex h-full w-64 flex-col bg-white border-r border-gray-200", className)}>
      <div className="py-5 border-b border-gray-200 px-3">
        <div className="flex items-center gap-3">
          <img src={HospitalLogo} alt="Hospital Logo" className="h-20 w-20" draggable={false} />
          <div className="text-teal-700 leading-tight">
            <span className="text-2xl font-bold block">Makalu</span>
            <span className="text-sm">Everest Hospital</span>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-2">
          {sidebarItems.map((item, index) => {
            const activeTop = isPathActive(item.path)
            return (
              <div key={index}>
                <div
                  onClick={() => handleItemClick(item, index)}
                  className={cn(
                    "flex items-center justify-between px-3 py-2 font-medium rounded-md cursor-pointer transition-colors",
                    activeTop ? "bg-teal-50 text-teal-700" : "text-gray-700 hover:bg-gray-50 hover:text-teal-700"
                  )}
                >
                  <div className="flex items-center">
                    <item.icon className={cn("mr-3 h-5 w-5", activeTop ? "text-teal-600" : "text-gray-400 group-hover:text-teal-600")} />
                    {item.title}
                  </div>
                  {item.subItems?.length > 0 && (
                    expandedItems.includes(index) ? (
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    )
                  )}
                </div>
                {item.subItems?.length > 0 && expandedItems.includes(index) && (
                  <div className="ml-7 mt-1 space-y-1">
                    {item.subItems.map((subItem: any, subIndex: number) => {
                      // Use exact match for subitems
                      const activeSub = location.pathname === subItem.path;
                      return (
                        <div
                          key={subIndex}
                          onClick={() => handleSubItemClick(subItem)}
                          className={cn(
                            "flex items-center px-3 py-1.5 text-sm rounded-md cursor-pointer transition-colors",
                            activeSub ? "bg-teal-50 text-teal-700" : "text-gray-600 hover:bg-gray-50 hover:text-teal-700"
                          )}
                        >
                          <subItem.icon className={cn("mr-2 h-4 w-4", activeSub ? "text-teal-600" : "text-gray-400 group-hover:text-teal-600")} />
                          {subItem.title}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export function HospitalSidebar() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden fixed top-4 left-4 z-50 bg-white shadow-md hover:bg-gray-50"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <div className="flex items-center justify-between p-4 border-b py-0.5">
            <h2 className="text-sm font-semibold">Menu</h2>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-4">
            <SidebarContent />
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
