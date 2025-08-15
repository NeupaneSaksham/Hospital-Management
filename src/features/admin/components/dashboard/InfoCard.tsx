import { Icon } from "@iconify/react"
import type React from "react"

interface InfoCardProps {
  icon: string
  value: string
  label: string
  iconBackgroundColor: string
  showBorder?: boolean
  borderColor?: string
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  value,
  label,
  iconBackgroundColor,
}) => {
  return (
    <div
      className={`flex items-center justify-between px-6 py-6 rounded-lg gap-10  flex-1 h-[100%] border-none bg-white`}
    >
      {/* <CHANGE> Updated icon container styling to match Figma design */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center  flex-shrink-0"
        style={{ backgroundColor: iconBackgroundColor }}
      >
        {
            (icon=='ru')?(
                <p className="text-4xl font-bold text-black"> रु</p>
            ):(
                <Icon icon={icon} width="42" height="42" color="white" />
            )
        }
      </div>

      {/* <CHANGE> Updated text styling and spacing to match Figma */}
      <div className="flex-1 min-w-0 items-center ">
        <div className="text-2xl font-semibold text-gray-900 mb-1 text-center">{value}</div>
        <div className="text-sm text-gray-600  text-center">{label}</div>
      </div>
    </div>
  )
}

export default InfoCard
