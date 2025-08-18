import type { Table } from "@tanstack/react-table";

export type Patient = {
  id: string;
  name: string;
  phone: string;
  disease: string;
  date: string;
  type: string;
  time: string;
  doctor: string;
  appointment_date: string;
  appointement_type: string;
  status: string;
  email: string;
  bloodType: string;
  age: number;
  gender: string;
  primaryDoctor: string;
};

export interface TableControlsProps {
  table: Table<Patient>;
}

export interface TableHeaderProps {
  table: Table<Patient>;
}

export interface TableBodyProps {
  table: Table<Patient>;
}

export interface TablePaginationProps {
  table: Table<Patient>;
}