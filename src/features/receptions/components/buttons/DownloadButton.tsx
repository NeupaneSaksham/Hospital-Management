import { Button } from '../../../../components/ui/button';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'icon' | 'default';
}

export default function DownloadButton({ label, onClick, className, size = 'sm' }: DownloadButtonProps) {
  return (
    <Button variant="outline" size={size} className={className ?? 'border-gray-300'} onClick={onClick}>
      <Download className="h-4 w-4" />
      {label && <span className="ml-2">{label}</span>}
    </Button>
  );
}


