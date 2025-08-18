// import { Package, FolderOpen, Ruler, Settings } from "lucide-react"

// interface SharedSidebarProps {
//   activePage: "stocks" | "categories" | "measurements" | "properties"
// }

// export default function SharedSidebar({ activePage }: SharedSidebarProps) {
//   const menuItems = [
//     {
//       id: "stocks",
//       label: "Stocks",
//       icon: Package,
//       href: "/settings/stock",
//     },
//     {
//       id: "categories",
//       label: "Categories",
//       icon: FolderOpen,
//       href: "/settings/categories",
//     },
//     {
//       id: "measurements",
//       label: "Unit Of Measure",
//       icon: Ruler,
//       href: "/settings/measurements",
//     },
//     {
//       id: "properties",
//       label: "Item Properties",
//       icon: Settings,
//       href: "/settings/properties",
//     },
//   ]

//   return (
//     <div className="w-60 bg-gray-100 border-r border-gray-200">
//       <div className="p-4">
//         <h2 className="text-lg font-medium text-teal-500 mb-6">Settings</h2>

//         <nav className="space-y-2">
//           {menuItems.map((item) => {
//             const Icon = item.icon
//             const isActive = activePage === item.id

//             return (
//               <div
//                 key={item.id}
//                 className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ${
//                   isActive ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-200"
//                 }`}
//               >
//                 <Icon className="w-4 h-4" />
//                 <span className={`text-sm ${isActive ? "font-medium" : ""}`}>{item.label}</span>
//               </div>
//             )
//           })}
//         </nav>
//       </div>
//     </div>
//   )
// }



import { Package, FolderOpen, Ruler, Settings } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface SharedSidebarProps {
  activePage: "stocks" | "categories" | "measurements" | "properties"
}

export default function SharedSidebar({ activePage }: SharedSidebarProps) {
  const navigate = useNavigate()
  

  const menuItems = [
    {
      id: "stocks",
      label: "Stocks",
      icon: Package,
      href: "/pharmacy/settings/stocks",
    },
    {
      id: "categories",
      label: "Categories",
      icon: FolderOpen,
      href: "/pharmacy/settings/categories",
    },
    {
      id: "measurements",
      label: "Unit Of Measure",
      icon: Ruler,
      href: "/pharmacy/settings/measurements",
    },
    {
      id: "properties",
      label: "Item Properties",
      icon: Settings,
      href: "/pharmacy/settings/properties",
    },
  ]

  const handleNavigation = (href: string) => {
    navigate(href)
  }

  return (
    <div className="w-60 bg-gray-100 border-r border-gray-200">
      <div className="p-4">
        <h2 className="text-lg font-medium text-teal-500 mb-6">Settings</h2>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activePage === item.id

            return (
              <div
                key={item.id}
                onClick={() => handleNavigation(item.href)}
                className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
                  isActive ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className={`text-sm ${isActive ? "font-medium" : ""}`}>{item.label}</span>
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}