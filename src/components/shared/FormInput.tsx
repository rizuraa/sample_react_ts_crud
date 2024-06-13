import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { userFormSchema } from "@/lib/FormValidator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IUser } from "@/Interfaces/IUser";

interface FormInputProps {
  onSubmit: (data: Omit<IUser, "id">) => void;
  defaultValues?: Partial<IUser>;
  isUpdate?: boolean;
  resetForm: () => void;
}

const FormInput: React.FC<FormInputProps> = ({
  onSubmit,
  defaultValues,
  isUpdate,
  resetForm,
}) => {
  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: defaultValues || {
      nama: "",
      email: "",
      role: "",
      password: "",
      access_token: "",
    },
  });

  useEffect(() => {
    if (isUpdate) {
      form.reset(defaultValues);
    }
  }, [defaultValues, isUpdate, form]);

  useEffect(() => {
    if (!isUpdate) {
      form.reset({
        nama: "",
        email: "",
        role: "",
        password: "",
        access_token: "",
      });
    }
  }, [isUpdate, form]);

  const handleSubmit = (data: z.infer<typeof userFormSchema>) => {
    onSubmit(data);
    resetForm();
  };

  return (
    <div>
      <h1 className="text-center text-lg font-bold">
        {isUpdate ? "Update Data User" : "Input Data User"}
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="nama"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input
                    placeholder="nama"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Input
                    placeholder="role"
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="password"
                    {...field}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="access_token"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Access Token</FormLabel>
                <FormControl>
                  <Input
                    placeholder="access_token"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormInput;
