"use client"

import userDispatch from "@/store/userDispatch"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AuthLayout ({children}) {

  const router = useRouter();

  useEffect(() => {
    if (userDispatch.user){
      router.push("/board")
    }
  }, [])

  return (
    <div className="bg-honeycomb flex justify-center items-center h-screen">
      {children}
    </div>
  )
}