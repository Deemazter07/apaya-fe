"use client";
import axios from "axios";
import { ENV } from "@/utils/env";
import React from "react";
import { useRouter } from "next/router";
import SignupCard from "@/components/card/SignupCard";

export default function Signup({ closeSignup, OpenSignupButton, OpenLoginButton }) {
  // const router = useRouter();

  const [input, setInput] = React.useState({});
  // console.log(input);
  const host = ENV.NEXT_PUBLIC_API_HOST;

  const handleChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmitInput = async (event) => {
    event.preventDefault();
    console.log(`isi input Email: ${input.email}`);
    try {
      const { data } = await axios.post(`${host}auth/login`, {
        emailPhone: input.email,
        password: input.password,
      });
      sessionStorage.setItem("user", JSON.stringify(data.data));
      // if (sessionStorage.getItem("user")) {
      //   router.push("/");
      // }
      console.log(`data`, data);
    } catch (error) {
      console.log("login gagal", error);
      throw error;
    }
  };
  return (
    <div className="absolute translate-y-1/2 translate-x-1/2 top-0 right-1/2">
      <SignupCard
        closeSignup={closeSignup}
        cekInput={setInput}
        handleChangeInput={handleChangeInput}
        handleSubmitInput={handleSubmitInput}
        OpenSignupButton={OpenSignupButton}
        OpenLoginButton={OpenLoginButton}
      />
    </div>
  );
}
