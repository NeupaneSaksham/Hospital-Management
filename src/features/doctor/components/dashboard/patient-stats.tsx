"use client"

import { useDashboardSummary } from "../../hooks/useDashboardSummary"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { Colors } from "@/assets/colours/colors"

const chartConfig = {
  patients: { label: "This Week", color: Colors.cyan },
  lastWeek: { label: "Last Week", color: Colors.gray },
} satisfies ChartConfig

export default function PatientStats() {
  const { data: summary } = useDashboardSummary()

  if (!summary) return null

  const chartData = summary.current_week_appointments?.map((day, index) => {
    const lastWeek = summary.last_week_appointments?.[index]?.total ?? 0
    return {
      day: new Date(day.day).getDate().toString(),
      patients: day.total,
      lastWeek,
    }
  }) ?? []

  const thisWeekTotal = summary.current_week_appointments?.reduce((acc, d) => acc + d.total, 0) ?? 0
  const lastWeekTotal = summary.last_week_appointments?.reduce((acc, d) => acc + d.total, 0) ?? 0

  const percentageChange = lastWeekTotal > 0 
    ? ((thisWeekTotal - lastWeekTotal) / lastWeekTotal) * 100 
    : 0

  const isPositive = percentageChange >= 0

  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">
          No of Patients today : {summary?.current_week_appointments?.slice(-1)[0]?.total ?? 0}
        </h2>
        <button className="text-sm text-teal-500 border-2 border-teal-500 rounded-md px-2 py-1 hover:bg-teal-500 hover:text-white hover:cursor-pointer">
          View Report
        </button>
      </div>

      <p className={`text-xs mb-4 ${isPositive ? "text-green-600" : "text-red-500"}`}>
        {isPositive ? "↑" : "↓"} {percentageChange.toFixed(1)}% vs last week
      </p>

      <p className="text-xs text-gray-500 mb-2">
        Patient data from {new Date(summary.current_week_appointments[0]?.day).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} -{" "}
        {new Date(summary.current_week_appointments.slice(-1)[0]?.day).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
      </p>

      <ChartContainer config={chartConfig} className="h-70 w-full">
        <BarChart data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <YAxis />
          <Bar dataKey="patients" fill="var(--color-patients)" radius={2} barSize={12} />
          <Bar dataKey="lastWeek" fill="var(--color-lastWeek)" radius={2} barSize={12} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
