"use client"

import userDispatch from "@/store/userDispatch"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const Sidebar = () => {

  const router = useRouter();
  const pathname = usePathname();

  const actions = [
    {
      label: "Профиль",
      href: "/board/profile"
    },
    {
      label: "Сотрудники",
      href: "/board/units"
    },
    {
      label: "Зарплата",
      href: "/board/salary"
    },
    {
      label: "Вакансии",
      href: "/board/vacancies"
    },
    {
      label: "Обучение",
      href: "/board/learn"
    },
    {
      label: "Уровень удовлетворенности",
      href: "#"
    },
    {
      label: "Смена пароля",
      href: "/board/password_change"
    },
  ]

  const quitAccount = e => {
    userDispatch.logout();
    router.push("/login")
  }

  return(
    <div className="side-nav flex flex-col justify-between">
      <div>
        <div className="flex justify-center">
          <div className="flex gap-2 mx-auto mb-4">
            <img src="/logo.png" alt="Logo" className="h-8"/>
            <p className="text-2xl font-bold">HiveHCM</p>
          </div>
        </div>
        <div className="flex flex-col">
        {
          actions.map(action => { 
            const isActive = pathname.startsWith(action.href);
            return <Link className={isActive ? "active" : ""} href={action.href}>{action.label}</Link>
          })
        }
        </div>
      </div>
      <div className="text-red-600 btn-exit flex gap-5" onClick={quitAccount}>
        <p>Выйти из системы</p>
        <svg className="my-auto" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
          <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
        </svg>
      </div>
    </div>
  )
}

export default Sidebar