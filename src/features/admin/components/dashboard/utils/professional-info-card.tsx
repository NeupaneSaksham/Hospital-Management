import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ProfessionalInfoCardProps {
  icon: LucideIcon
  value: string
  label: string
  trend?: {
    value: string
    isPositive: boolean
  }
  accentColor?: string
}

export function ProfessionalInfoCard({
  icon: Icon,
  value,
  label,
  trend,
  accentColor = "bg-accent",
}: ProfessionalInfoCardProps) {
  return (
    <Card className="border-0 shadow-sm bg-card hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className={`h-12 w-12 rounded-lg ${accentColor}/10 flex items-center justify-center flex-shrink-0`}>
            <Icon className={`h-6 w-6 ${accentColor === "bg-accent" ? "text-accent" : "text-white"}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-2xl font-bold text-foreground mb-1">{value}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
            {trend && (
              <div className="flex items-center mt-2">
                <span className={`text-xs font-medium ${trend.isPositive ? "text-green-600" : "text-red-600"}`}>
                  {trend.isPositive ? "↗" : "↘"} {trend.value}
                </span>
                <span className="text-xs text-muted-foreground ml-1">vs last period</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
