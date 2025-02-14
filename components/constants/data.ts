import { NavItem } from "@/components/types";

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    company: "TechGuru",
    role: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    company: "CodeGenius",
    role: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    company: "SoftWorks",
    role: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    company: "DevCraft",
    role: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    company: "WebSolutions",
    role: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
];

export type Farm = {
  title: string;
  address: string;
  city: string;
  state: string;
  country: string;
  size: number;
  description: string;
};

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const PondSelectOptions = {
  origin: [
    "Açude",
    "Bacia",
    "Chuva",
    "Lago",
    "Poço",
    "Nascente",
    "Mina",
    "Rio",
    "Outro",
  ],
  type: [
    "Caixas",
    "Edificados(Circular/Retangular)",
    "Escavado",
    "Raceway",
    "Rede/Gaiola",
  ],

  status: ["livre", "desativado"],
};

export const LoteSelectOptions = {
  status: [
    "Reprodução",
    "Berçário",
    "Crescimento",
    "Engorda",
    "Despesca",
    "Finalizado",
  ],
};


export const MortalitySelectOptions = [
  "Qualidade da Água",
  "Temperatura",
  "Salinidade",
  "Doenças",
  "Predadores",
  "Poluição",
  "Antibióticos",
  "Probióticos",
  "Alimentação Inadequada",
  "Manuseio inadequado",
  "Superpopulação",
  "Falta de Recursos",
  "Outros",
]
export const PaymentMethodOptions = [
  "Boleto",
  "Transferencia",
  "Pix",
  "Débito",
  "Crédito",
  "Outro",
];

export const ServiceOptions = ["Venda", "Despesa"];

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

export const registersData = [
  { title: "Oxigênio (mg/L)", max: 1, min: 0, checked: false },
  { title: "Temperatura (°C)", max: 1, min: 0, checked: false },
  { title: "Temp. Ambiente (°C)", max: 1, min: 0, checked: false },
  { title: "Salinidade (ppt)", max: 1, min: 0, checked: false },
  { title: "Salinidade (mg/L)", max: 1, min: 0, checked: false },
  { title: "Transparência (cm)", max: 1, min: 0, checked: false },
  { title: "Amônia (mg/L)", max: 1, min: 0, checked: false },
  { title: "Dureza Total (mg/L CaCO3)", max: 1, min: 0, checked: false },
  { title: "Dureza Total GH (°dGH)", max: 1, min: 0, checked: false },
  { title: "Dureza Carbonatos KH (°dKH)", max: 1, min: 0, checked: false },
  { title: "pH", max: 1, min: 0, checked: false },
  { title: "Sódio (mg/L)", max: 1, min: 0, checked: false },
  { title: "Ozônio (mg/L)", max: 1, min: 0, checked: false },
  { title: "Magnésio (mg/L)", max: 1, min: 0, checked: false },
  { title: "Cálcio (mg/L)", max: 1, min: 0, checked: false },
  { title: "Cloretos (mg/L)", max: 1, min: 0, checked: false },
  { title: "Condutividade (μS/cm)", max: 1, min: 0, checked: false },
  { title: "Alcalinidade (mg/L CaCO3)", max: 1, min: 0, checked: false },
  { title: "Oxigênio Dissolvido (mg/L)", max: 1, min: 0, checked: false },
  { title: "Nitrato (mg/L)", max: 1, min: 0, checked: false },
  { title: "Nitrito (mg/L)", max: 1, min: 0, checked: false },
  { title: "Sólidos Totais Dissolvidos TDS (mg/L)", max: 1, min: 0, checked: false },
  { title: "Sólidos Suspensos (mg/L)", max: 1, min: 0, checked: false }
];


export const speciesTypes = [
  "Crustáceos",
  "Peixes",
  "Moluscos",
  "Algas",
  "Equinodermos",
  "Anfíbios",
  "Répteis",
  "Cnidários",
];

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
