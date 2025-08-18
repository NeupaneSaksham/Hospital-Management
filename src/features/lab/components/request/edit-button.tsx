import { Button } from "@/components/ui/button"
import { Edit } from "lucide-react"
import { Link } from "react-router-dom"

interface EditButtonProps {
  href: string
}

export function EditButton({ href }: EditButtonProps) {
  return (
    <Link to={href}>
      <Button className="bg-red-500 hover:bg-red-600 text-white">
        <Edit className="w-4 h-4 mr-2" />
        Edit
      </Button>
    </Link>
  )
}
