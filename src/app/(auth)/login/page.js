"use client"

import EmailInput from "@/components/Inputs/EmailInput";
import PasswordInput from "@/components/Inputs/PasswordInput";
import Link from "next/link";
import { useState } from "react"


export default function Login () {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = e => {
    e.preventDefault()
    console.log("logging in")
  }

  return (
    <>
      <div className="flex justify-between bg-white rounded-md w-1/4 p-4 flex-col">
        <div className="flex gap-2 mx-auto mb-4">
          <img src="/logo.png" alt="Logo" className="h-8"/>
          <p className="text-2xl font-bold">HiveHCM</p>
        </div>
        <div className="flex-col w-100 mx-3">
          <form onSubmit={login}>
            <EmailInput
              value={email}
              onChange={e => setEmail(e.target.value)}
              label="Email"
            />
            <PasswordInput
              value={password}
              onChange={e => setPassword(e.target.value)}
              label="Пароль"
            />
            <button className="btn-primary w-full mb-2" type="submit">
              Войти
            </button>
            <div className="flex gap-1 font-normal">
              <p>или</p>
              <Link className="border-b border-b-gray-400 hover:border-b-black" href="/registration">добавьте компанию</Link> 
            </div>
          </form>
        </div>
      </div>
    </>
  )
}