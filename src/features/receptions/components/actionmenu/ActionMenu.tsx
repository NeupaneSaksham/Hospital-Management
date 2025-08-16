import { Button } from '../../../../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../../components/ui/dropdown-menu';
import { MoreHorizontal, Trash2 } from 'lucide-react';

interface ActionMenuProps {
  onEdit?: () => void;
  onPrint?: () => void;
  onVisit?: () => void;
  onBilling?: () => void;
  onMedical?: () => void;
  onDelete?: () => void;
}

export function ActionMenu({
  onEdit,
  onPrint,
  onVisit,
  onBilling,
  onMedical,
  onDelete
}: ActionMenuProps) {
  return ( 
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={onEdit}>Edit Details</DropdownMenuItem>
        <DropdownMenuItem onClick={onPrint}>Re-print</DropdownMenuItem>
        <DropdownMenuItem onClick={onVisit}>Visits</DropdownMenuItem>
        <DropdownMenuItem onClick={onBilling}>Billing History</DropdownMenuItem>
        <DropdownMenuItem onClick={onMedical}>Medical History</DropdownMenuItem>
        <hr />
        <DropdownMenuItem onClick={onDelete} className="text-red-600">
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
