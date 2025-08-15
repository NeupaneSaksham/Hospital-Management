import { Outlet } from "react-router-dom"
import { SettingSidebar } from "./component/setting-sidebar"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Layout() {
  const [showSidebar, setShowSidebar] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile based on screen width
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
      setShowSidebar(window.innerWidth >= 768)
    }
    
    // Initial check
    checkIfMobile()
    
    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)
    
    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return (
    <div className="flex flex-col md:flex-row w-full h-full relative">
      {/* Mobile Sidebar Toggle Button */}
      {isMobile && (
        <div className="md:hidden p-2 bg-white border-b border-gray-200">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setShowSidebar(!showSidebar)}
            className="flex items-center gap-2"
          >
            <Menu size={18} />
            <span>Settings Menu</span>
          </Button>
        </div>
      )}
      
      {/* Settings Sidebar - hidden on mobile unless toggled */}
      <div className={`${showSidebar ? 'block' : 'hidden'} ${isMobile ? 'absolute top-12 left-0 z-30 h-[calc(100%-48px)]' : 'relative'}`}>
        <SettingSidebar />
      </div>
      
      {/* Main Content */}
      <main className="flex-1 p-0 bg-white">
        <Outlet />
      </main>
      
      {/* Backdrop for mobile sidebar */}
      {isMobile && showSidebar && (
        <div 
          className="fixed inset-0 bg-black/20 z-20" 
          onClick={() => setShowSidebar(false)}
        ></div>
      )}
    </div>
  )
}
