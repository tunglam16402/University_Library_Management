"use client";

import AuthForm from "@/components/auth/AuthForm";
import { loginSchema } from "@/lib/validation";
import React from "react";

const page = () => (
  <AuthForm
    type="LOGIN"
    schema={loginSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={() => {}}
  />
);

export default page;
