"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
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
import { toast } from "@/components/ui/use-toast";
import { Dispatch, SetStateAction, useState } from "react";
import { SelectItems } from "@/components/select-items";
import {
  SpecieColumnData,
  SpecieEditForm,
} from "@/app/(pages)/dashboard/(pages)/species/types";
import { updateSpecie } from "@/app/(pages)/dashboard/(pages)/species/actions";
import { speciesTypes } from "@/components/constants/data";
import AsyncButton from "@/components/ui/async-button";

type EditDialogType<T> = {
  state: [T, Dispatch<SetStateAction<T>>];
  data: SpecieColumnData;
};

type EditFormType = {
  useDialog: any;
  data: SpecieColumnData;
};
const zMessage = {
  min: {
    message: "Campo Requerido",
  },
  max: {
    message: "max. 50 caracteres",
  },
};

const formSchema = z.object({
  name: z.string().min(1, zMessage.min).max(50, zMessage.max),
  type: z.string().min(1, zMessage.min).max(50, zMessage.max),
  a_weight: z.number(),
  description: z.string().max(150, { message: "max. 150 caractéres" }),
});

function FormContent({ useDialog, data }: EditFormType) {
  const [blockConfirm, setBlockConfirm] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data.name,
      type: data.type,
      a_weight: data.a_weight,
      description: data.description,
    },
  });

  function compareEqual(
    data: SpecieEditForm,
    values: z.infer<typeof formSchema>,
  ) {
    const valuesToCompare = {
      name: data.name,
      a_weight: data.a_weight,
      type: data.type,
      description: data.description,
    };

    return JSON.stringify(values) === JSON.stringify(valuesToCompare);
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const [, setOpen] = useDialog;

    setBlockConfirm(true);
    try {
      if (compareEqual(data, values)) {
        toast({
          variant: "destructive",
          title: "Ocorreu um erro ao editar os dados.",
          description: "Altere ao menos 1 campo.",
        });
        return;
      }

      await updateSpecie(data.id, values);

      toast({
        variant: "success",
        title: "Sucesso.",
        description: "Dados atualizados no Sistema!",
      });
      setOpen(false);

    } catch (err: any) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Ocorreu um erro ao editar os dados.",
        description: err?.message,
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
              name="name"
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
              name="a_weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Peso Médio (g)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
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
                    <SelectItems title="Tipo" items={speciesTypes} {...field} />
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

export function EditSpecieDialog({ data, state }: EditDialogType<boolean>) {
  const [open, setOpen] = state;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Editar dados de {data.name}</DialogTitle>
          <DialogDescription>
            Edite os dados da espécie de cultivo preenchendo os campos abaixo:
          </DialogDescription>
        </DialogHeader>
        <FormContent useDialog={[open, setOpen]} data={data} />
      </DialogContent>
    </Dialog>
  );
}
