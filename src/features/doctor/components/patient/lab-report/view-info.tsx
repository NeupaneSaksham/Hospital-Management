import { Button } from "@/components/ui/button";
import { type ReactNode } from "react";

interface ViewInfoProps {
  report: { [key: string]: any };
  onClose: () => void;
  children?: ReactNode;
}

export default function ViewInfo({ report, onClose, children }: ViewInfoProps) {
  return (
    <div className="fixed inset-0 bg-opacity-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
        <h2 className="text-xl font-bold mb-4">View Info - {report.testName || "X-Ray Forearm"}</h2>
        {children}
        <Button onClick={onClose} className="mt-4">Close</Button>
      </div>
    </div>
  );
}