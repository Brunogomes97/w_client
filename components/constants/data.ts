import { NavItem } from "@/components/types";


export const uf = {
  brazil: [
    "AP",
    "AC",
    "AL",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ],
};


export const noteTypes = [
  "Pessoal",
  "Trabalho",
  "Estudo",
  "Ideia",
  "Lembrete",
  "Para fazer",
  "Meeting",
];
export const noteTypeObjectFormat = {
  Pessoal: "personal",
  Trabalho: "work",
  Estudo: "study",
  Ideia: "idea",
  Lembrete: "reminder",
  "Para fazer": "todo",
  Meeting: "meeting",
}


export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },


];
