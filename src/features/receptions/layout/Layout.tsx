
import { Outlet, useLocation } from 'react-router-dom';
import { Settings, User, ChevronDown } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../components/ui/dropdown-menu';
import { HospitalSidebar } from '../sidebar/Sidebar';

export default function Layout() {
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    
    if (path === "/reception/patients" || path === "/reception/") return "Patient List";
    if (path === "/reception/patients/add") return "Add Patient";
    if (path === "/reception/dashboard") return "Dashboard";
    if (path === "/reception/appointments/list") return "Appointments";
    if (path === "/reception/appointments/create") return "Create Appointment";
    if (path === "/reception/appointments/manage") return "Manage Appointments";
    if (path === "/reception/appointments/shortlist") return "Appointment Shortlist";
    if (path.startsWith("/reception/patients/visits/")) return "Patient Visits";
    if (path.startsWith("/reception/patients/billing/")) return "Billing History";
    if (path === "/reception/medical-history") return "Medical History";
    if (path === "/reception/settings") return "Settings";
    if (path === "/reception/profile") return "Profile";
    if (path.startsWith("/reception/patients/")) return "Patient Details";
    
    return "Reception Dashboard";
  };
  const pageTitle = getPageTitle();

  return (
    <div className="flex h-screen bg-gray-50">
      <HospitalSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 py-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3"></div>
              <div className="hidden md:block">
                <h2 className="text-2xl font-semibold text-teal-600 ml-0.5">
                  {pageTitle}
                </h2>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5 text-gray-500" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2"
                  >
                    <User className="h-5 w-5 text-gray-500" />
                    <span className="hidden md:inline text-gray-600">
                      Receptionist
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}