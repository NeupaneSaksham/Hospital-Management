"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { day: "Sun", income: 20500, expenses: 10200 },
  { day: "Mon", income: 17000, expenses: 21500 },
  { day: "Tue", income: 19500, expenses: 12500 },
  { day: "Wed", income: 23000, expenses: 18800 },
  { day: "Thu", income: 21500, expenses: 15800 },
  { day: "Fri", income: 22500, expenses: 6800 },
  { day: "Sat", income: 9200, expenses: 14500 },
]

const chartConfig = {
  income: {
    label: "Income",
    color: "#5CC7FE", 
  },
  expenses: {
    label: "Expenses",
    color: "#FF655880", 
  },
} satisfies ChartConfig

export function RevenueChart() {
  return (
    <Card className="w-full  overflow-hidden border-none rounded-none shadow-none">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900">Revenue</CardTitle>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 bg-blue-400 "></div>
              <span className="text-sm text-gray-600">Income</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 bg-red-400 "></div>
              <span className="text-sm text-gray-600">Expenses</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-full">
        <ChartContainer config={chartConfig} className="h-full w-full aspect-auto">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
              right: 12,
              left: 12,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="day" tickLine={false} axisLine={false} className="text-gray-500" tick={{ fontSize: 11 }} />
            <YAxis
              tickLine={false}
              axisLine={false}
              className="text-gray-500"
              tick={{ fontSize: 11 }}
              tickFormatter={(value) => `${value / 1000}K`}
              domain={[0, 25000]}
              ticks={[0, 5000, 10000, 15000, 20000, 25000]}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value, name) => [
                    `$${(value as number).toLocaleString()}`,
                    name === "income" ? "Income" : "Expenses",
                  ]}
                />
              }
            />
            <Bar dataKey="income" fill="var(--color-income)" radius={[2, 2, 0, 0]} maxBarSize={44} />
            <Bar dataKey="expenses" fill="var(--color-expenses)" radius={[2, 2, 0, 0]} maxBarSize={44} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
