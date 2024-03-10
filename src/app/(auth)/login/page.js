"use client"

import { DangerAlert } from "@/components/alerts";
import { EmailInput, PasswordInput } from "@/components/inputs";
import Link from "next/link";
import { useState } from "react"


export default function Login () {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [alertText, setAlertText] = useState();
  const [open, setOpen] = useState(false);
 
  const login = e => {
    e.preventDefault()
    setOpen(false)
    console.log(email)

    if (email === "" || password === ""){
      console.log("empty")
      setAlertText("Заполните все поля")
      setOpen(true)
    }
  }

  return (
    <>
      <div className="flex absolute justify-between bg-white rounded-md w-1/4 p-4 flex-col">
        <div className="flex gap-2 mx-auto mb-4">
          <img src="/logo.png" alt="Logo" className="h-8"/>
          <p className="text-2xl font-bold">HiveHCM</p>
        </div>
        <div className="flex-col w-100 mx-3">
          <form onSubmit={login}>
            <EmailInput
              value={email}
              setValue={e => setEmail(e.target.value)}
              label="Email"
            />
            <PasswordInput
              value={password}
              setValue={e => setPassword(e.target.value)}
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
      <DangerAlert 
        text={alertText}
        open = {open}
        onClose={e => setOpen(false)}
      />
    </>
  )
}