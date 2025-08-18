import { API } from "@/api/client"
import { endpoint } from "../services/dashboard.endpoint"
import type { DashboardSummary } from "../types/dashboard.types"

export const dashboardSummaryApi = {
  getDashboard: async (): Promise<DashboardSummary> => {
    const res = await API.get(endpoint.viewDashboardSummary)
    console.log(res.data)
    return res.data?.data??{}
  },
}
