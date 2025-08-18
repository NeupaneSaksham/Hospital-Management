"use client";

import { type ColumnDef } from "@tanstack/react-table";
import RowActions from "./row-actions";
import type { Patient } from "@/features/doctor/types/patient.types";

export const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "disease",
    header: "Disease",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <RowActions patient={row.original} />,
  },
];