"use client";
import LoginCard from "@/components/card/LoginCard";
import axios from "axios";
import { ENV } from "@/utils/env";
import React from "react";
import { useRouter } from "next/router";

export default function Login({ closeLogin, OpenSignupButton }) {
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
      const { dataLogin } = await axios.post(`${host}auth/login`, {
        emailPhone: input.email,
        password: input.password,
      });
      // console.log(`data`, data.data.jwt);
        try {
          const { data } = await axios.post(`${host}auth/me`, {
            headers : {authorization: dataLogin.data.jwt}
          });
          console.log(`data`, data);
          // sessionStorage.setItem("user", JSON.stringify(data.data));
        } catch (error) {
          console.log("login gagal", error);
          throw error;
        }
    } catch (error) {
      console.log("login gagal", error);
      throw error;
    }
  };
  return (
    <div className="absolute translate-y-1/2 translate-x-1/2 top-0 right-1/2">
      <LoginCard
        closeLogin={closeLogin}
        cekInput={setInput}
        handleChangeInput={handleChangeInput}
        handleSubmitInput={handleSubmitInput}
        OpenSignupButton={OpenSignupButton}
      />
    </div>
  );
}
