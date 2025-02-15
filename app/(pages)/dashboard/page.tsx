import BreadCrumb from "@/components/breadcrumb-page";
import { CreateNoteDialog } from "@/components/dialogs/create-note-dialog";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";


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
    //  searchParams 
}: paramsProps) {

    // const page = Number(searchParams.page) || 1;
    // const pageLimit = Number(searchParams.limit) || 10;
    // const title = searchParams.search || null;
    // const offset = (page - 1) * pageLimit;
    // const search = title ? `&search=${title}` : "";
    // const nota = searchParams.nota || "";
    // const status = searchParams.status || "";
    // const notaSearch = nota ? `&nota=${nota}` : "";
    // const statusSearch = status ? `&status=${status}` : "";

    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <BreadCrumb items={breadcrumbItems} />
            <div className="flex items-start justify-between">
                <Heading title={metadata.title} description={metadata.description} />
                <CreateNoteDialog />
            </div>
            <Separator />
            {/* <NotesTable
                searchKey="title"
                columns={columns}
                pageNo={page}
                totalItems={total_items}
                data={data}
                pageCount={pageCount}
            /> */}
        </div>
    );
}