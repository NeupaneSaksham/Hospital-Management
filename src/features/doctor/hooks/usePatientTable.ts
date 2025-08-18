import { useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel } from "@tanstack/react-table";
import { usePatientTableStore } from "@/features/doctor/store/patient-table.store";
import { columns } from "@/features/doctor/components/patient/patient-columns";
import type { Patient } from "@/features/doctor/types/patient.types";

export function usePatientTable(patients: Patient[]) {
  const { sorting, setSorting, columnFilters, setColumnFilters, columnVisibility, setColumnVisibility, rowSelection, setRowSelection } =
    usePatientTableStore();

  return useReactTable({
    data: patients,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
}