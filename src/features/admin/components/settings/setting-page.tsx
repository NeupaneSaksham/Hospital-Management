import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

const departmentSections = [
  {
    name: "Lab",
    icon: "mdi:flask",
    color: "#F1F5F9",
    iconColor: "#48EEFF",
    path: "/admin/settings/lab"
  },
  {
    name: "Radiology",
    icon: "medical-icon:i-radiology",
    color: "#6781FF",
    iconColor: "#FFFFFF",
    path: "/admin/settings/radiology"
  },
  {
    name: "Inpatient Services",
    icon: "medical-icon:inpatient",
    color: "#7F8CAA",
    iconColor: "#FFFFFF",
    path: "/admin/settings/inpatient-services"
  },
  {
    name: "Operation",
    icon: "medical-icon:i-surgery",
    color: "#00C71E",
    iconColor: "#FFFFFF",
    path: "/admin/settings/operation"
  },
  {
    name: "Department",
    icon: "fa6-solid:user-doctor",
    color: "#5CC7FE",
    iconColor: "#FFFFFF",
    path: "/admin/settings/department"
  },
  {
    name: "Pharmacy",
    icon: "mdi:pill",
    color: "#FE5C5C",
    iconColor: "#FFFFFF",
    path: "/admin/settings/pharmacy"
  },
  {
    name: "Discharge",
    icon: "mdi:account-arrow-down",
    color: "#0ABAB5",
    iconColor: "#FFFFFF",
    path: "/admin/settings/discharge"
  },
  {
    name: "Receptionist",
    icon: "streamline-kameleon-color:receptionist",
    color: "#26B6D3",
    iconColor: "#000000",
    path: "/admin/settings/receptionist"
  },
  {
    name: "Emergency",
    icon: "material-symbols:e911-emergency",
    color: "#FF0000",
    iconColor: "#FFFFFF",
    path: "/admin/settings/emergency"
  },
  {
    name: "Others",
    icon: "subway:add-1",
    color: "bg-black",
    iconColor: "#000000",
    path: "/admin/settings/others"
  },
]

export function SettingsPage() {
  const navigate = useNavigate();
  
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="space-y-2">
        <h1 className="text-md font-medium text-gray-900 mb-4 pb-2 border-b-2 border-[#0ABAB5] w-fit">
          Our Section
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {departmentSections.map((section) => (
          <Card 
            key={section.name} 
            className="relative hover:shadow-md transition-shadow rounded-none cursor-pointer" 
            onClick={() => navigate(section.path)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-6 w-6 rounded-full hover:bg-gray-50 z-10"
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click event when clicking the dots button
              }}
            >
              <Icon icon="mdi:dots-vertical" width="20" height="20" color="#000000" />
            </Button>
            <CardContent className="p-2">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center`} style={{ backgroundColor: section.color }}>
                    <Icon icon={section.icon} width="50" height="50" color={section.iconColor} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 text-center">{section.name}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
