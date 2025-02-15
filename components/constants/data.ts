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

  {
    title: "Fazendas",
    href: "/dashboard/farms",
    icon: "tractor",
    label: "fazendas",
  },

  {
    title: "Lotes",
    href: "/dashboard/lotes",
    icon: "fish",
    label: "lotes",
  },
  {
    title: "Tanques",
    href: "/dashboard/ponds",
    icon: "tanques",
    label: "tanques",
  },
  {
    title: "Espécies",
    href: "/dashboard/species",
    icon: "especies",
    label: "especie",
  },
  {
    title: "Rações",
    href: "/dashboard/stock",
    icon: "racoes",
    label: "racoes",
  },
  {
    title: "Arraçoamentos",
    href: "/dashboard/feeding",
    icon: "calendar",
    label: "racoes",
  },
  {
    title: "Fornecedores",
    href: "/dashboard/suppliers",
    icon: "suppliers",
    label: "fornecedores",
  },
  {
    title: "Clientes",
    href: "/dashboard/clients",
    icon: "customers",
    label: "clientes",
  },

  {
    title: "Finanças",
    href: "/dashboard/finances",
    icon: "dollar",
    label: "vendas",
  },
  {
    title: "Biometrias",
    href: "/dashboard/biometry",
    icon: "biometry",
    label: "biometria",
  },
  {
    title: "Mortalidades",
    href: "/dashboard/mortalities",
    icon: "mortalitites",
    label: "mortalidade",

  },
  {
    title: "Registros",
    href: "/dashboard/registers",
    icon: "register",
    label: "registros",
  },

  {
    title: "Funcionários",
    href: "/dashboard/employee",
    icon: "users",
    label: "Funcionários",
  },

  // {
  //   title: "Perfil",
  //   href: "/dashboard/profile",
  //   icon: "profile",
  //   label: "profile",
  // },
  // {
  //   title: "Notas",
  //   href: "/dashboard/notes",
  //   icon: "kanban",
  //   label: "notas",
  // },
];
