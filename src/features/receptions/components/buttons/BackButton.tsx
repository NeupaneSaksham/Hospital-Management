import { ArrowLeft } from 'lucide-react'
import { Button } from '../../../../components/ui/button'
import { useNavigate } from 'react-router-dom'

interface BackButtonProps {
  to?: string
  label?: string
  onClick?: () => void
  className?: string
}

export default function BackButton({ to = '/patients', label = 'Back', onClick, className = '' }: BackButtonProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (to) {
      navigate(to)
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className={`p-1 bg-white border-gray-300 cursor-pointer hover:bg-gray-50 ${className}`}
      onClick={handleClick}
      type="button"
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="text-base font-medium">{label}</span>
    </Button>
  )
}
