import { getCurrentSession } from "@/app/actions";
import { CreateNoteDialog } from "@/components/dialogs/create-note-dialog";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";
import { fetchAPI } from "@/services/api";
import { FetchingNoteData, NoteData } from "./types";
import BreadCrumb from "@/components/breadcrumb-page";
import { columns } from "@/components/tables/notas-table/columns";
import { NotesTable } from "@/components/tables/notas-table/notas-table";


const breadcrumbItems = [{ title: "Notas", link: "/dashboard" }];

type paramsProps = {
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
};

const metadata = {
    title: "Minhas notas",
    description: "Notas registradas no sistema ",
};


export default async function DashboardPage({
    searchParams
}: paramsProps) {
    const params = await searchParams


    const page = Number(params.page) || 1;
    const pageLimit = Number(params.limit) || 10;
    const title = params.search || null;
    const offset = (page - 1) * pageLimit;
    const search = title ? `&search=${title}` : "";
    const type = params.type || "";
    const typeSearch = type ? `&type=${type}` : "";

    const result = await getCurrentSession();

    const { user } = result;
    if (user === null) {
        redirect("/login");
    }


    const fetchingRoute =
        `notas/?offset=${offset.toString()}&limit=${pageLimit.toString()}${search}${typeSearch}`;

    const response = await fetchAPI<FetchingNoteData>(fetchingRoute, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).catch((err) => console.log(err));


    const data = response?.data as NoteData[];
    const total_items = response?.total_items || 0;
    const pageCount = Math.ceil(total_items / pageLimit) || 1;



    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <BreadCrumb items={breadcrumbItems} />
            <div className="flex items-start justify-between">
                <Heading title={metadata.title} description={metadata.description} />
                <CreateNoteDialog />
            </div>
            <Separator />
            <NotesTable
                tableName="nota"
                searchKey="title"
                columns={columns}
                pageNo={page}
                totalItems={total_items}
                data={data}
                pageCount={pageCount}
            />
        </div>
    );
}