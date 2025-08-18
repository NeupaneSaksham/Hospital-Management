import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";


export default function DateFilter() {
  return (
    <Button variant="outline" onClick={() => {}}>
      <Calendar size={16} className="mr-2" />
      Filter by Date
    </Button>
  );
}