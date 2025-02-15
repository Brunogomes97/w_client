"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { SelectItems } from "@/components/select-items";
import { noteTypes } from "@/components/constants/data";
import { ApiErrorProps } from "@/lib/types";
import AsyncButton from "@/components/ui/async-button";
import { toast } from "@/hooks/use-toast";

const zMessage = {
  min: {
    message: "Campo Requerido",
  },
  max: {
    message: "max. 200 caracteres",
  },
};

const formSchema = z.object({
  title: z.string().min(1, zMessage.min).max(50, zMessage.max),
  type: z.enum(["Pessoal", "Trabalho", "Estudo", "Ideia", "Lembrete", "Para fazer", "Meeting"]),
  description: z.string().min(1, zMessage.min).max(200, { message: "max. 150 caractéres" }),
});
type FormContentType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;

};

export function CreateNoteDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={cn(buttonVariants({ variant: "default" }))}>
          <Plus className="mr-2 h-4 w-4" /> Adicionar Nota
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Adicionar Nota</DialogTitle>
          <DialogDescription>
            Realize o cadastro da Nota preenchendo os campos abaixo:
          </DialogDescription>
        </DialogHeader>
        <FormContent open={open} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}



function FormContent({ setOpen }: FormContentType) {
  const [blockConfirm, setBlockConfirm] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "Minha Nota",
      type: "Pessoal",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setBlockConfirm(true);
    console.log(values);

    try {
      // await createSpecie(values);
      toast({
        variant: "success",
        title: "Sucesso.",
        description: "Nota Registrada no Sistema!",
      });
      setOpen(false);
    } catch (err: unknown) {
      const error = err as ApiErrorProps;

      console.error(error);
      toast({
        variant: "destructive",
        title: "Ocorreu um erro ao realizar o cadastro .",
        description: error?.message,
      });
      setOpen(false);
    } finally {
      setBlockConfirm(false);
    }

  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo</FormLabel>
                  <FormControl>
                    <SelectItems title="Tipo" items={noteTypes} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <AsyncButton type="submit" loading={blockConfirm} title="Salvar" />
        </DialogFooter>
      </form>
    </Form>
  );
}

