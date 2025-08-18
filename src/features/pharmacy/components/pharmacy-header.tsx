import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSidebar } from '@/components/ui/sidebar';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface AppHeaderProps {
  title?: string;
}

export function AppHeader({ title = 'Dashboard' }: AppHeaderProps) {
  const { openMobile, toggleSidebar } = useSidebar();
  const navigate = useNavigate();
  return (
    <header className="flex h-18 shrink-0 items-center justify-between border-b bg-white px-4 md:px-6 border-gray-200 sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden h-8 w-8"
          onClick={toggleSidebar}
          aria-label={openMobile ? 'Close menu' : 'Open menu'}
        >
          {openMobile ? (
            <X className="h-5 w-5 text-gray-600" />
          ) : (
            <Menu className="h-5 w-5 text-gray-600" />
          )}
        </Button>
        <h1 className="text-2xl font-semibold text-[#0ABAB5]">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="h-8 w-8"></Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 h-8 px-3"
            >
              <Icon
                icon="iconamoon:settings-fill"
                width="24"
                height="24"
                color="#9A9AA9"
              />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#ffffff] rounded-full flex items-center justify-center border border-gray-500">
                  <Icon
                    icon="ri:user-fill"
                    width="24"
                    height="24"
                    color="#9A9AA9"
                  />
                </div>
                <span className="text-sm font-medium text-gray-500">Admin</span>
                <Icon
                  icon="gridicons:dropdown"
                  width="28"
                  height="28"
                  color="#9A9AA9"
                />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/pharmacy/settings')}>
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
