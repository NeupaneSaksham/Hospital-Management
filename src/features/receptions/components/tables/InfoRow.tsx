import { Label } from "../../../../components/ui/label";

interface InfoRowProps {
  label: string;
  value: string | number | React.ReactNode;
}

export default function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-center gap-4">
      <Label className="w-24 text-gray-700">{label}</Label>
      <span className="text-gray-600">:</span>
      <span className="text-gray-800">{value}</span>
    </div>
  );
}
