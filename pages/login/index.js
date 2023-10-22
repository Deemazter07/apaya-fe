"use client"
import LoginCard from "@/components/card/LoginCard";
import axios from "axios";
import React from "react";

export default function Login({ closeLogin }) {
    const [input, setInput] = React.useState({})
    // console.log(input);
const host = env

    const handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput((values) => ({ ...values, [name]: value }));
      };
    
      const handleSubmitInput = async (event) => {
        event.preventDefault();
        console.log(`isi input Email: ${input.email}`);
        try {
          const { data } = await axios.post("https://7fa8-2001-448a-2034-30bc-99ca-58d3-2030-ac4b.ngrok-free.app/auth/login", {
            emailPhone: input.email,
            password: input.password
          });
          console.log(`data`, data);
        } catch (error) {
          console.log("login gagal", error);
          throw error;
        }
      }
    return(
        <div className="absolute translate-y-1/2 translate-x-1/2 top-0 right-1/2">
        <LoginCard closeLogin={closeLogin} cekInput={setInput} handleChangeInput={handleChangeInput} handleSubmitInput={handleSubmitInput} />
        </div>
    )
}