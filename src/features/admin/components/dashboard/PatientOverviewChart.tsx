"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const PatientOverview = () => {
  const [selectedYear, setSelectedYear] = useState("2012")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Sample data for the chart - converted to match shadcn format
  const data2012 = [
    { month: "Jan", hospitalized: 8500, discharged: 6000 },
    { month: "Feb", hospitalized: 11000, discharged: 7500 },
    { month: "Mar", hospitalized: 6000, discharged: 4500 },
    { month: "Apr", hospitalized: 13000, discharged: 8500 },
    { month: "May", hospitalized: 9800, discharged: 6500 },
    { month: "Jun", hospitalized: 11500, discharged: 8000 },
    { month: "Jul", hospitalized: 10200, discharged: 7300 },
    { month: "Aug", hospitalized: 12000, discharged: 8500 },
    { month: "Sep", hospitalized: 11200, discharged: 8200 },
    { month: "Oct", hospitalized: 6500, discharged: 4500 },
    { month: "Nov", hospitalized: 5000, discharged: 3500 },
    { month: "Dec", hospitalized: 10000, discharged: 7000 },
  ]

  const years = ["2012", "2013", "2014", "2015"]
  const currentData = data2012 // You can extend this to handle multiple years

  // Chart configuration for shadcn
  const chartConfig = {
    hospitalized: {
      label: "Hospitalized",
      color: "#00C71E", // Green-500 equivalent
    },
    discharged: {
      label: "Discharged",
      color: "#00C71E80", // Green-200 equivalent
    },
  } satisfies ChartConfig

  // Format Y-axis labels
  const formatYAxisLabel = (value: number) => {
    if (value >= 1000) {
      return `${value / 1000}K`
    }
    return value.toString()
  }

  return (
    <div>
      <Card className=" border-none shadow-none rounded-none">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <CardTitle className="text-lg font-semibold text-gray-900">Patient Overview</CardTitle>
              </div>
            </div>

            {/* Year Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="text-sm font-medium text-gray-700">{selectedYear}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-1 w-20 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(year)
                        setIsDropdownOpen(false)
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <ChartContainer config={chartConfig} className="h-[220px] w-full">
            <BarChart accessibilityLayer data={currentData} margin={{ top: 12, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
              <YAxis
                tickFormatter={formatYAxisLabel}
                tickLine={false}
                axisLine={false}
                domain={[0, 25000]}
                ticks={[0, 5000, 10000, 15000, 20000, 25000]}
              />
              <ChartTooltip
                content={<ChartTooltipContent hideLabel />}
                formatter={(value, name) => [
                  formatYAxisLabel(value as number),
                  chartConfig[name as keyof typeof chartConfig]?.label || name,
                ]}
              />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="hospitalized" stackId="patients" fill="var(--color-hospitalized)" radius={[0, 0, 0, 0]} barSize={30}/>
              <Bar dataKey="discharged" stackId="patients" fill="var(--color-discharged)" radius={[0, 0, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

export default PatientOverview
