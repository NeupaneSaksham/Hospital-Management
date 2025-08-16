import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

interface Props {
  monthlyData: { month: string; value: number }[]
}

const MonthlyProgressChart = ({ monthlyData }: Props) => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)

  return (
    <Card className="lg:col-span-2 bg-white shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-gray-900">Monthly Progress</CardTitle>
        <Select defaultValue="monthly">
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Monthly" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between h-64 px-4">
          {monthlyData.map((item, index) => (
            <div key={item.month} className="flex flex-col items-center">
              <div className="relative mb-2">
                <div
                  className={`w-8 rounded-t transition-all duration-200 cursor-pointer ${
                    hoveredBar === index
                      ? "bg-green-600 shadow-lg transform scale-105"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                  style={{ height: `${item.value * 2}px` }}
                  onMouseEnter={() => setHoveredBar(index)}
                  onMouseLeave={() => setHoveredBar(null)}
                />
                {hoveredBar === index && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {item.month}: {item.value}k
                  </div>
                )}
              </div>
              <span className="text-xs text-gray-500">{item.month}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default MonthlyProgressChart
