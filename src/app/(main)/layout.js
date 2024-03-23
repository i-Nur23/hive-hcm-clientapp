"use client"

import { Sidebar } from "@/components/navs"
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

  return (
  <>
    <Sidebar/>
    <div className="pl-[20%]">
      <div className="p-7">
        {children}
      </div>
    </div>
  </>
  )
})

export default MainLayout