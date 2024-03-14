"use client"

import userDispatch from "@/store/userDispatch"
import { observer } from "mobx-react"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

const MainLayout = observer(({children}) => {
  
  const [user, setUser] = useState()
  
  useEffect(() => {
    if (!userDispatch.user){
      redirect('/login')
      return
    }

    setUser(userDispatch.user);

  })

  return <>{children}</>
})

export default MainLayout