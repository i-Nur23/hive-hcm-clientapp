"use client"

import userDispatch from "@/store/userDispatch";
import { observer } from "mobx-react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Home = observer((props) => {
  useEffect(() => {
    if (userDispatch.user === null){
      redirect('/login')
    } else {
      redirect('/dashboard')
    }
  }, [])
})

export default Home