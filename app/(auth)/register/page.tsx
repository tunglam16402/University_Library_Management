"use client";

import AuthForm from "@/components/auth/AuthForm";
import { signUp } from "@/lib/actions/auth";
import { registerSchema } from "@/lib/validation";
import React from "react";

const page = () => (
  <AuthForm
    type="REGISTER"
    schema={registerSchema}
    defaultValues={{
      fullName: "",
      email: "",
      universityId: 0,
      universityCard: "",
      password: "",
      confirmPassword: "",
    }}
    onSubmit={signUp}
  />
);

export default page;
