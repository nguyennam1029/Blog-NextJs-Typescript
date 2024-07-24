"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { toast, useToast } from "@/components/ui/use-toast";
import {
  RegisterBody,
  RegisterBodyType,
} from "@/schemaValidations/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { handleErrorApi } from "@/lib/utils";
import authApiRequest from "@/apiRequests/auth";
const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
});

function RegisterForm() {
  const { toast } = useToast();
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: RegisterBodyType) {
    try {
      const result = await authApiRequest.register(values);
      console.log("🚀 ~ onSubmit ~ result:", result);
      toast({
        description: result.payload.mes,
      });
      await authApiRequest.auth({ sessionToken: result.payload.access_token });
      router.push("/");
    } catch (error: any) {
      handleErrorApi({
        error,
        setError: form.setError,
      });
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
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
                <Input placeholder="email@gmail.com" {...field} />
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
                <Input placeholder="******" {...field} type="password" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input placeholder="******" {...field} type="password" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}

export default RegisterForm;
