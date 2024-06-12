import React from "react";
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
}

const FormInput: React.FC<FormInputProps> = ({ onSubmit }) => {
  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      nama: "",
      email: "",
      role: "",
      password: "",
      access_token: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof userFormSchema>) => {
    onSubmit(data);
    form.reset(); // Reset the form to its default values
  };

  return (
    <div>
      <h1 className="mb-5">Input Data User</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="nama"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Nama</FormLabel>
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
                <FormLabel className="form-label">Email</FormLabel>
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
                <FormLabel className="form-label">Role</FormLabel>
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
                <FormLabel className="form-label">Password</FormLabel>
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
                <FormLabel className="form-label">test</FormLabel>
                <FormControl>
                  <Input
                    placeholder="test"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default FormInput;
