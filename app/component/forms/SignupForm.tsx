"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

import { ReloadIcon } from "@radix-ui/react-icons"; // Import loading icon

const formSchema = z
  .object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email(),
    password: z.string().min(8),
    ConfirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.ConfirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const SignUpForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      ConfirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const toastId = toast.loading("Creating your account...");
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          email: values.email,
          password: values.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Registration Failed");
      }

      // Success message
      toast.dismiss(toastId);
      toast.success("Registration successfull");

      router.push("/login");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Registration Failed"
      );
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 "
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">Username</FormLabel>
              <FormControl>
                <Input placeholder="username" type="text" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-semibold">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@email.com"
                  type="email"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-lg font-semibold">
                  Password
                </FormLabel>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  {...field}
                />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="ConfirmPassword"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-lg font-semibold">
                  Confirm Password
                </FormLabel>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  {...field}
                />
              </FormItem>
            );
          }}
        />
        <Button type="submit">
          {form.formState.isSubmitting ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Creating account...
            </>
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
