"use client"

import { Colors } from "@/assets/colours/colors"
import { useDashboardSummary } from "../../hooks/useDashboardSummary"

const summaryConfig = [
  { name: "In Progress", key: "under_treatment", colorFrom: "#a78bfa", colorTo: "#7c3aed", position: "top-0 left-0" },
  { name: "Completed", key: "discharged", colorFrom: "#34d399", colorTo: "#059669", position: "top-0 right-0" },
  { name: "Admitted", key: "admitted", colorFrom: Colors.cyan, colorTo: Colors.blue, position: "bottom-0 left-1/2 -translate-x-1/2" },
]

export default function AppointmentSummary() {
  const { data: summary } = useDashboardSummary()

  if (!summary) return null

  return (
    <div className="bg-white rounded-xl p-4 shadow flex flex-col items-center">
      <h2 className="font-semibold mb-4">Appointments</h2>

      <div className="relative w-[250px] h-[250px]">
        {summaryConfig.map((item, i) => (
          <div
            key={i}
            className={`absolute ${item.position} w-[150px] h-[150px] rounded-full flex flex-col items-center justify-center text-white text-center opacity-80`}
            style={{
              background: `linear-gradient(to bottom right, ${item.colorFrom}, ${item.colorTo})`,
            }}
          >
            <span className="text-sm font-medium">{item.name}</span>
            <span className="text-lg font-bold">
              {summary.appointment_status?.[item.key as keyof typeof summary.appointment_status] ?? 0}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
