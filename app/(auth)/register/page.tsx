"use client";

import AuthForm from "@/components/auth/AuthForm";
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
    onSubmit={() => {}}
  />
);

export default page;
