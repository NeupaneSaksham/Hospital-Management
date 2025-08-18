import { useQuery } from "@tanstack/react-query"
import { dashboardSummaryApi } from "../api/dashboard.api"
import type { DashboardSummary } from "../types/dashboard.types"

const FIVEMINUTE = 5 * 60 * 1000;

export function useDashboardSummary() {
  return useQuery<DashboardSummary, Error>({
    queryKey: ["dashboardSummary"],    
    queryFn: () => dashboardSummaryApi.getDashboard(),
    staleTime: FIVEMINUTE,
    refetchOnWindowFocus: true,
  })
}
