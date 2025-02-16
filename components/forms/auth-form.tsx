"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { ReloadIcon } from "@radix-ui/react-icons";
import * as z from "zod";
import { useRouter } from 'next/navigation';
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getClientSession } from "@/hooks/provider";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Insira um email válido" }),
  password: z
    .string()
    .refine((value) => value, { message: "Insira uma senha válida" }),
});
type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {

  const { isSuccess, isLoading } = useQuery(getClientSession());


  useEffect(() => {
    if (isSuccess) {
      router.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const router = useRouter();

  const defaultValues = {
    email: "",
    password: "",
  };

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });


  const onSubmit = async (data: UserFormValue) => {
    // event.preventDefault();
    try {
      const { email, password } = data;
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);


      const response = await fetch(`/login/api`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao autenticar");
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Ocorreu um erro ao realizar login!",
        description: "Credenciais Incorretas.",
      });
      // console.error(error);
    } finally {
      form.reset();

    };
  }
  return (
    <>
      {
        isLoading
          ? <SkeletonCard /> : <AuthFormulary form={form} onSubmit={onSubmit} />}
    </>
  );
}


interface AuthFormularyProps {
  form: UseFormReturn<UserFormValue>;
  onSubmit: (data: UserFormValue) => void;
}

function AuthFormulary({ form, onSubmit }: AuthFormularyProps) {
  const isSubmitting = form.formState.isSubmitting;

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Coloque o seu email..."
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Coloque o sua Senha..."
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isSubmitting}
            className="ml-auto w-full"
            type="submit"
          >
            {isSubmitting ? (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Entrar"
            )}
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground"></span>
        </div>
      </div>
    </>
  )
}

function SkeletonCard() {

  return (
    <div className="space-y-2 w-full animate-pulse">
      <div className="space-y-3">
        <div className="space-y-1">
          <Skeleton className="h-4 w-1/4 rounded" /> {/* Placeholder para o FormLabel de Email */}
          <Skeleton className="h-10 w-full rounded-md" /> {/* Placeholder para o Input de Email */}
        </div>
        <div className="space-y-1">
          <Skeleton className="h-4 w-1/4 rounded" /> {/* Placeholder para o FormLabel de Senha */}
          <Skeleton className="h-10 w-full rounded-md" /> {/* Placeholder para o Input de Senha */}
        </div>
        <div className="flex justify-end">
          <Skeleton className="h-10 w-full rounded-md" /> {/* Placeholder para o botão */}
        </div>
      </div>
      <div className="relative mt-4">
        <div className="absolute inset-0 flex items-center">
          <Skeleton className="w-full border-t border-muted" /> {/* Placeholder para a borda */}
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground"></span>
        </div>
      </div>
    </div>
  );
}