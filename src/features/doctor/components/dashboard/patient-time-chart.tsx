"use client"

import { Label, Pie, PieChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useDashboardSummary } from "../../hooks/useDashboardSummary"

export default function PatientTimeChart() {
  const { data: summary } = useDashboardSummary()

  if (!summary) return null  

  const chartData = [
    { name: "Morning", value: summary.patient_time_registration_count.morning, fill: "#0ABAB5" },
    { name: "Afternoon", value: summary.patient_time_registration_count.afternoon, fill: "#FFD93D" },
    { name: "Evening", value: summary.patient_time_registration_count.evening, fill: "#FF6B6B" },
  ]

  const totalPatients = chartData.reduce((acc, curr) => acc + curr.value, 0)

  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h2 className="text-lg font-semibold mb-4">Patients by Time of Day</h2>
      <ChartContainer
        config={{
          Morning: { label: "Morning", color: "#0ABAB5" },
          Afternoon: { label: "Afternoon", color: "#FFD93D" },
          Evening: { label: "Evening", color: "#FF6B6B" },
        }}
        className="flex justify-center min-h-[250px]"
      >
        <PieChart>
          <ChartTooltip content={<ChartTooltipContent className="bg-[#37375C]" />} />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={80}
            strokeWidth={5}
          >
            <Label
              position="center"
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="text-xl font-bold fill-gray-900"
                      >
                        {totalPatients}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 20}
                        className="fill-gray-500 text-sm"
                      >
                        Patients
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  )
}
