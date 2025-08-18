"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import DashboardLoader from "../../components/loaders/dashboard-loader"
import DashboardContent from "./dashboard-content"

const queryClient = new QueryClient()

export default function DashboardPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardLoader>
        <DashboardContent />
      </DashboardLoader>
    </QueryClientProvider>
  )
}
