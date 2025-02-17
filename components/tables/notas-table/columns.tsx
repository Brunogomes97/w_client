"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { NotesColumnData } from "@/app/(pages)/dashboard/types";
import { Checkbox } from "@/components/ui/checkbox";
import { DateTime } from "luxon";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<NotesColumnData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row }) => {
      const type = row.original.type.toLowerCase();
      const types: { [key: string]: string } = {
        personal: "Pessoal",
        work: "Trabalho",
        study: "Estudo",
        ideia: "Ideia",
        reminder: "Lembrete",
        todo: "Tarefa",
      };
      return <Badge>{types[type] || type}</Badge>;
    },
  },
  {
    accessorKey: "created_at",
    header: "Data de Criação",
    cell: (props) => {
      const date = DateTime.fromISO(props.row.original.createdAt);
      return date.setLocale("pt-BR").toLocaleString(DateTime.DATETIME_SHORT);
    },
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
