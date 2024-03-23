"use client"

import UserApi from "@/api/UserApi"
import { Alert } from "@/components/alerts"
import { PasswordInput } from "@/components/inputs"
import { useState } from "react"

const PasswordChange = () => {
  
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  
  const [open, setOpen] = useState(false)
  const [alertText, setAlertText] = useState()
  const [alertType, setAlertType] = useState("danger")

  const savePassword = e => {
    e.preventDefault()
    setOpen(false)

    if (!oldPassword || !newPassword){
      setAlertText("Заполните все поля")
      setAlertType("danger")
      setOpen(true)
      return;
    }

    UserApi.updatePasswordAsync(oldPassword, newPassword)
    .then(response => {
      setAlertText("Данные изменены успешно")
      setAlertType("success")
      setOpen(true)
    })
    .catch(error => {
      if (!error.response){
        console.log(error)
      }

      setAlertType("danger")

      const status = error.response.status

      if (status < 500) {
        setAlertText(error.response.data);
      } else {
        setAlertText("Ошибка сервера. Пожалуйста подождите")
      }

      setOpen(true)
    });
  } 
  
  return(
    <>
      <form onSubmit={savePassword} className="flex flex-col gap-5 w-1/2">
        <p className="text-2xl">Смена пароля</p>
          <PasswordInput
            label="Старый пароль"
            setValue={e => setOldPassword(e.target.value)}
            value={oldPassword}
          />
          <PasswordInput
            label="Новый пароль"
            setValue={e => setNewPassword(e.target.value)}
            value={newPassword}
          />
        <button
          className="bg-amber-200 text-amber-900 rounded-md p-2 w-1/4"
          type="submit"
        >
          Сменить
        </button>
      </form>
      <div className="flex justify-center">
        <Alert 
          type = {alertType}
          text = {alertText}
          open = {open}
          onClose = {e => setOpen(false)}
        />
      </div>
    </>
    
  )
}

export default PasswordChange