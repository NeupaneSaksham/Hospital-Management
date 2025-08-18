"use client";

import { MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Patient } from "@/features/doctor/types/patient.types";

interface RowActionsProps {
  patient: Patient;
}

export default function RowActions({ patient }: RowActionsProps) {
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer text-[#000000] hover:text-[#0ABAB5]">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(patient.id)}> {/* Copy patient ID */}
          Copy patient ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => navigate(`/doctor/patients/${patient.id}?tab=Create Card`)}
        >
          Create Card
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => navigate(`/doctor/patients/${patient.id}?tab=Medical History`)}
        >
          Medical History
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => navigate(`/doctor/patients/${patient.id}?tab=Lab Reports`)}
        >
          Lab Report
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
