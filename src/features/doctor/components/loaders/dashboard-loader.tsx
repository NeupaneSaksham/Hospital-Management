"use client"
import type { ReactNode } from "react"
import { useDashboardSummary } from "../../hooks/useDashboardSummary"
import LoadingSpinner from "@/components/loading-spinner"

export default function DashboardLoader({ children }: { children: ReactNode }) {
  const { isLoading, error } = useDashboardSummary()

  if (isLoading) return <LoadingSpinner />
  if (error) return <div className="text-red-500">{error.message}</div>

  return <>{children}</>
}

// minor logic update 6943
