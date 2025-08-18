
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/pharmacy-sidebar"
import { AppHeader } from "../components/pharmacy-header"
import MetricsCard from "@/features/receptions/components/cards/MetricsCard"
import MonthlyProgressChart from "@/features/receptions/components/chart/MonthlyProgressChart"
import TodaysReport from "@/features/receptions/components/TodaysReport"
import RecentOrdersTable from "@/features/receptions/components/tables/RecentOrdersTable"
import type { Order } from "../types/Order" 
import { stockApi } from "../services/api/stockapi"
import { useQuery } from "@tanstack/react-query"

export default function Dashboard() {
  const {
    data: dashboardData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["dashboardData"],
    queryFn: stockApi.getDashboardData,
  });
  console.log("Dashboard data",dashboardData)

  if (isLoading) {
    return <div className="p-6">Loading dashboard…</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">Error loading dashboard.</div>;
  }

  // Extract data for MetricsCard
  const metrics = {
    totalCustomers: dashboardData?.totalCustomers || 0,
    totalProfit: dashboardData?.totalProfit || 0,
    outOfStock: dashboardData?.outOfStock || 0,
    totalSales: dashboardData?.totalSales || 0
  };

  // Extract data for MonthlyProgressChart
  const monthlyData = dashboardData?.monthlyProgress?.map((item: {month:string; value:string}) => ({
    month: item.month,
    value: item.value
  })) || [];

  // Extract data for TodaysReport
  const chartOptions = {
    series: [
      dashboardData?.totalPurchase || "undefined",
      dashboardData?.cashReceived || "undefined",
      dashboardData?.ordersInProgress || 0,
      dashboardData?.totalSales || 0
    ],
    chart: { height: 300, type: "radialBar" as const },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: { fontSize: "18px" },
          value: { fontSize: "14px" },
          total: { 
            show: true, 
            label: "Total", 
            formatter: () => dashboardData?.totalOrders?.toString() || "0" 
          },
        },
      },
    },
    labels: ["Total Purchase", "Cash Received", "Order In Progress", "Total Sales"],
    colors: ["#ef4444", "#fbbf24", "#3b82f6", "#10b981"],
  };


  const recentOrders: Order[] = dashboardData?.recentOrders || [];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <AppHeader title="Dashboard" />
          <main className="p-6 bg-gray-50 flex-1 overflow-auto w-full">
            <MetricsCard 
              totalCustomers={metrics.totalCustomers}
              totalProfit={metrics.totalProfit}
              outOfStock={metrics.outOfStock}
              totalSales={metrics.totalSales}
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <MonthlyProgressChart monthlyData={monthlyData} />
              <TodaysReport chartOptions={chartOptions} />
            </div>
            <RecentOrdersTable orders={recentOrders} />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}



