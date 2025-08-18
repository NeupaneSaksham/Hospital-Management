import { create } from "zustand";
import type { ColumnFiltersState, SortingState, VisibilityState, RowSelectionState } from "@tanstack/react-table";

interface PatientTableState {
  sorting: SortingState;
  setSorting: (sorting: SortingState | ((old: SortingState) => SortingState)) => void;
  columnFilters: ColumnFiltersState;
  setColumnFilters: (filters: ColumnFiltersState | ((old: ColumnFiltersState) => ColumnFiltersState)) => void;
  columnVisibility: VisibilityState;
  setColumnVisibility: (visibility: VisibilityState | ((old: VisibilityState) => VisibilityState)) => void;
  rowSelection: RowSelectionState;
  setRowSelection: (selection: RowSelectionState | ((old: RowSelectionState) => RowSelectionState)) => void;
}

export const usePatientTableStore = create<PatientTableState>((set) => ({
  sorting: [],
  setSorting: (sorting) => {
    set((state) => ({
      sorting: typeof sorting === "function" ? sorting(state.sorting) : sorting,
    }));
  },
  columnFilters: [],
  setColumnFilters: (filters) => {
    set((state) => ({
      columnFilters: typeof filters === "function" ? filters(state.columnFilters) : filters,
    }));
  },
  columnVisibility: {},
  setColumnVisibility: (visibility) => {
    set((state) => ({
      columnVisibility: typeof visibility === "function" ? visibility(state.columnVisibility) : visibility,
    }));
  },
  rowSelection: {},
  setRowSelection: (selection) => {
    set((state) => ({
      rowSelection: typeof selection === "function" ? selection(state.rowSelection) : selection,
    }));
  },
}));