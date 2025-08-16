import { Button } from "../../../../components/ui/button";
import { Printer } from "lucide-react";

interface PrintButtonProps {
  onClick?: () => void;
  className?: string;
}

export function PrintButton({ onClick, className }: PrintButtonProps) {
  return (
    <div className="flex items-center justify-end mb-6">
      <Button
        className={`bg-teal-500 hover:bg-teal-600 text-white px-6 ${className}`}
        onClick={onClick}
      >
        <Printer className="w-4 h-4 mr-2" /> Print
      </Button>
    </div>
  );
}
