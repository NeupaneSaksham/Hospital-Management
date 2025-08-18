import { Button } from "@/components/ui/button"
import { Eye, Copy, Share } from "lucide-react"

export function RowActions() {
  return (
    <div className="flex space-x-2">
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Eye className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Copy className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Share className="h-4 w-4" />
      </Button>
    </div>
  )
}
