"use client"

import { Pie, PieChart } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { department: "pharmacy", patients: 450, fill: "var(--color-pharmacy)" },
  { department: "emergency", patients: 320, fill: "var(--color-emergency)" },
  { department: "operation", patients: 280, fill: "var(--color-operation)" },
  { department: "lab", patients: 380, fill: "var(--color-lab)" },
]

const chartConfig = {
  patients: {
    label: "Patients",
  },
  pharmacy: {
    label: "Pharmacy",
    color: "#60A5FA", // Blue to match screenshot
  },
  emergency: {
    label: "Emergency",
    color: "#EF4444", // Red to match screenshot
  },
  operation: {
    label: "Operation",
    color: "#4ADE80", // Green to match screenshot
  },
  lab: {
    label: "Lab",
    color: "#FBBF24", // Yellow/orange to match screenshot
  },
} satisfies ChartConfig

export function TopDepartmentChart() {
  return (
    <Card className="h-[42vh] border-none shadow-none gap-0 rounded-none">
      <CardHeader className="items-center pb-1">
        <CardTitle className="text-lg font-semibold text-gray-900">Top Departments</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pt-0">
        <ChartContainer config={chartConfig} className="mx-auto  w-full">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="patients"
              nameKey="department"
              innerRadius="45%"
              outerRadius="80%"
              strokeWidth={2}
            />
          </PieChart>
        </ChartContainer>

        {/* Custom Legend matching the screenshot layout */}
        <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto mt-4">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-3 h-3 bg-[#60A5FA] rounded-sm flex-shrink-0"></div>
            <span className="text-xs font-medium truncate">Pharmacy</span>
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-3 h-3 bg-[#4ADE80] rounded-sm flex-shrink-0"></div>
            <span className="text-xs font-medium truncate">Operation</span>
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-3 h-3 bg-[#EF4444] rounded-sm flex-shrink-0"></div>
            <span className="text-xs font-medium truncate">Emergency</span>
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-3 h-3 bg-[#FBBF24] rounded-sm flex-shrink-0"></div>
            <span className="text-xs font-medium truncate">Lab</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
