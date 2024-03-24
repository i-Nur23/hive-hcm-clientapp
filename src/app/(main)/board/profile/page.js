"use client"

import { EmployeeApi } from "@/api"
import UserApi from "@/api/UserApi"
import { Alert } from "@/components/alerts"
import { TextInput, PhoneInput, EmailInput, CountryChoice, PasswordInput, DateInput } from "@/components/inputs"
import { useEffect, useState } from "react"

const Profile = () => {
  
  const [name, setName] = useState(null)
  const [surname, setSurname] = useState(null)
  const [patronymic, setPatronymic] = useState(null)
  const [email, setEmail] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [country, setCountry] = useState(null)
  const [city, setCity] = useState(null)
  const [birthdate, setBirthdate] = useState(null)

  const [open, setOpen] = useState(false)
  const [alertText, setAlertText] = useState()
  const [alertType, setAlertType] = useState("danger")

  useEffect(() => {
    (
      async () => {
        var response = await EmployeeApi.getPersonalInfo();
        const employee = response.data;
        setName(employee.name)
        setSurname(employee.surname)
        setPatronymic(employee.patronimic)
        setEmail(employee.email)
        setPhoneNumber(employee.phoneNumber)
        setCountry(employee.country)
        setCity(employee.city)
        setBirthdate(employee.birthDate)
      }
    )()
  }, [])

  const saveInfo = e => {
    e.preventDefault()
    setOpen(false)

    if (!name || !surname || !email){
      setAlertText("Поля имени, фамилии и email обязательны!")
      setAlertType("danger")
      setOpen(true)
      return;
    }

    UserApi.updateUserAsync(name, surname, patronymic, email, phoneNumber, country?.isoCode, city, birthdate)
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
        setAlertText(error.response.data ?? "Ошибка запроса");
      } else {
        setAlertText("Ошибка сервера. Пожалуйста подождите")
      }

      setOpen(true)
    });
  }

  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={saveInfo}>
        <p className="text-2xl">Редактирование профиля</p>
        <div className="flex gap-5 justify-between">
          <TextInput
            label="Имя"
            setValue={e => setName(e.target.value)}
            value={name}
          />
          <TextInput
            label="Фамилия"
            setValue={e => setSurname(e.target.value)}
            value={surname}
          />
          <TextInput
            label="Отчество"
            setValue={e => setPatronymic(e.target.value)}
            value={patronymic}
          />
        </div>
        <div className="flex gap-5 justify-between">
          <EmailInput
            label="Email"
            setValue={e => setEmail(e.target.value)}
            value={email}
          />
          <PhoneInput
            label="Телефон"
            setValue={e => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </div>
        <div className="flex gap-5 justify-between">
          <CountryChoice
            country={country}
            setCountry={setCountry}
          />
          <TextInput
            label="Город"
            setValue={e => setCity(e.target.value)}
            value={city}
          />
        </div>
        <div className="w-1/4">
          <DateInput
            label="Дата рождения"
            date={birthdate}
            setDate={date => setBirthdate(date)}
          />
        </div>
        <button
          className="bg-amber-200 text-amber-900 rounded-md p-2 w-1/4"
          type="submit"
        >
          Сохранить
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

export default Profile