import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Chart from "react-apexcharts"

interface Props {
  chartOptions: any
}

const TodaysReport = ({ chartOptions }: Props) => {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Today's Report</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center mb-6">
          <div className="w-full max-w-[200px] mb-4">
            <Chart
              options={chartOptions}
              series={chartOptions.series}
              type="radialBar"
              height={200}
            />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Total Earning</p>
            <p className="text-xl font-bold text-gray-900">Rs.5098.00</p>
            <span className="text-green-500 text-sm font-medium">35%</span>
          </div>
        </div>

        <div className="space-y-2">
          {[
            { color: "bg-red-500", label: "Total Purchase" },
            { color: "bg-yellow-500", label: "Cash Received" },
            { color: "bg-blue-500", label: "Order In progress" },
            { color: "bg-green-500", label: "Total Sales" },
          ].map((item) => (
            <div key={item.label} className="flex items-center text-sm">
              <div className={`w-3 h-3 ${item.color} rounded-full mr-2`}></div>
              <span className="text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default TodaysReport


