"use client"

import { useEffect } from "react"

const { default: userDispatch } = require("@/store/userDispatch")
const { observer } = require("mobx-react")

const Main = observer(() => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="text-xl">Добро пожаловать</p>
          <p className="">Выберите необходимое действие на панели</p>
        </div>
      </div>
    </>
  )
})

export default Main