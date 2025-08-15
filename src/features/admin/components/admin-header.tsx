import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { NavLink } from "react-router-dom"
import { useSidebar } from "@/components/ui/sidebar"
import { useNavigate } from "react-router-dom";

interface AppHeaderProps {
  title?: string
}

export function AppHeader({ title = "Dashboard" }: AppHeaderProps) {
  const { toggleSidebar } = useSidebar();
  const navigate = useNavigate();
  return (
    <header className="flex h-18 shrink-0 items-center justify-between border-b bg-white px-4 sm:px-6 border-gray-200 sticky top-0 z-40">
      <div className="flex items-center gap-3">
        {/* Hamburger on mobile */}
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden h-8 w-8"
          onClick={toggleSidebar}
        >
          <Icon icon="mdi:menu" width="24" height="24" />
        </Button>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-semibold text-[#0ABAB5] truncate">
          {title}
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-0">
        <Button className="bg-transparent hover:bg-transparent shadow-none cursor-pointer" onClick={() => navigate("/admin/settings")}>
          <Icon icon="iconamoon:settings-fill" width="20" height="20" color="#9A9AA9" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 h-8 px-3 text-xs sm:text-sm cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-[#9A9AA9]">
                  <Icon icon="ri:user-fill" width="20" height="20" color="#9A9AA9" />
                </div>
                <span className="hidden sm:inline font-bold text-[#9A9AA9]">Admin</span>
                <Icon icon="gridicons:dropdown" width="20" height="20" color="#9A9AA9" className="hidden sm:inline" />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40 sm:w-48 text-sm">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem >Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>

  )
}
