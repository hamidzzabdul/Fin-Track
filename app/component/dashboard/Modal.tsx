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
import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
import * as z from "zod";
import { IoClose } from "react-icons/io5";

// import { auth } from "@/lib/auth";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useState } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  amount: z.coerce.number().min(1, "Amount must be at least 1"),
  date: z.string().min(1, "Date is required"),
  emoji: z.string().min(1, "Emoji is required"),
});

interface IncomeOverviewProps {
  onClose: () => void;
  type: "income" | "expense";
}

const Modal = ({ onClose, type }: IncomeOverviewProps) => {
  const { data: session } = useSession();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      amount: 0,
      date: "",
      emoji: type === "income" ? "💰" : "💸", // Default emojis
    },
  });

  const onEmojiClick = (emojiData: EmojiClickData) => {
    form.setValue("emoji", emojiData.emoji, { shouldValidate: true });
    setShowEmojiPicker(false);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    if (!session?.user?.id) {
      toast.error("Unauthorized - Please log in");
      return;
    }
    try {
      const response = await fetch(`/api/${type}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          userId: session.user.id,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Failed to add ${type}`);
      }
      toast.success(`${type} added successfully`);
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error(`Failed to add ${type}`);
    }
  };
  return (
    <div
      className={`w-[50%]  bg-white rounded-md p-6 absolute ${
        type === "income" ? "top-[38%]" : "top-[25%]"
      } left-1/2 -translate-x-1/2 ${
        type === "expense" ? "translate-y-[-25%]" : "translate-y-[-50%]"
      } z-50`}
    >
      <div className="w-full flex justify-between items-center">
        <p className="font-semibold text-lg">
          Add an {type === "income" ? "Income" : "Expense"}
        </p>
        <IoClose
          className="text-2xl float-end font-semibold text-black cursor-pointer"
          onClick={onClose}
        />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-6"
        >
          <FormField
            control={form.control}
            name="emoji"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold">Icon</FormLabel>
                <FormControl>
                  <div className="relative">
                    <button
                      type="button"
                      className="text-2xl p-2 rounded-md bg-gray-100 hover:bg-gray-200"
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    >
                      {field.value}
                    </button>
                    {showEmojiPicker && (
                      <div className="absolute z-10 mt-2">
                        <EmojiPicker
                          width={300}
                          height={350}
                          onEmojiClick={onEmojiClick}
                        />
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold">
                  {type === "income" ? "Income" : "Expense"}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Freelance,salary, etc"
                    type="text"
                    {...field}
                    className="h-10 w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold">Amount</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    className="h-10"
                    onChange={(e) =>
                      field.onChange(e.target.valueAsNumber || 0)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold">Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className="h-10" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full">
            <Button
              className="w-[150px] h-10 bg-purple-600 text-white hover:bg-purple-700 transition-all duration-200 ease-in-out float-left"
              disabled={!session}
            >
              Add {type === "income" ? "Income" : "Expense"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Modal;
