"use client";

import { Table } from "@/components/ui/table";
import { usePatientTable } from "../../hooks/usePatientTable";
import { TableControls } from "./patient-table/table-controls";
import { TableHeaderComponent } from "./patient-table/table-header";
import { TableBodyComponent } from "./patient-table/table-body";
import { TablePagination } from "./patient-table/table-pagination";
import { usePatients } from "../../hooks/usePatient";
import LoadingSpinner from "@/components/loading-spinner";

export function PatientTable() {
  const { data: patients = [], isLoading, error } = usePatients();
  const table = usePatientTable(patients);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500">{error.message}</div>;

  return (
    <div className="w-full">
      <TableControls table={table} />
      <div className="rounded-md border">
        <Table>
          <TableHeaderComponent table={table} />
          <TableBodyComponent table={table} />
        </Table>
      </div>
      <TablePagination table={table} />
    </div>
  );
}