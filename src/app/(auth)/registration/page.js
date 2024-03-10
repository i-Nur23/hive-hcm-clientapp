"use client"

import { DangerAlert } from "@/components/alerts";
import { TextInput, EmailInput, PasswordInput } from "@/components/inputs";
import Link from "next/link";
import { useState } from "react"

export default function Registration () {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [company, setCompany] = useState();

  const [open, setOpen] = useState(false);
  const [alertText, setAlertText] = useState();

  const login = e => {
    e.preventDefault()
    
    setOpen(false);

    if (!email || !password || !name || !surname || !company){
      setAlertText("Заполните все поля")
      setOpen(true)
    }
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
            <TextInput
              value={name}
              setValue={e => setName(e.target.value)}
              label="Имя"
            />
            <TextInput
              value={surname}
              setValue={e => setSurname(e.target.value)}
              label="Фамилия"
            />
            <TextInput
              value={company}
              setValue={e => setCompany(e.target.value)}
              label="Название компании"
            />
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
              Зарегистрироваться
            </button>
            <div className="flex gap-1 font-normal">
              <p>Уже зарегистрированы? </p>
              <Link className="border-b border-b-gray-400 hover:border-b-black" href="/login">Войти</Link> 
            </div>
          </form>
        </div>
      </div>
      <DangerAlert
        open={open}
        onClose={e => setOpen(false)}
        text={alertText}
      />
    </>
  )
}