"use client"

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { EmployeeApi } from "@/api"
import { useEffect, useState } from "react"

const Employees = () => {

  const [units, setUnits] = useState([])

  useEffect(() => {
    (
      async () => {
        EmployeeApi.getUnits()
        .then(response =>
          setUnits(response.data)
        )
      }
    )()
  },[])

  return (
    <>
      <p className="text-2xl mb-5">Подразделения</p>
      <div className="mx-auto w-full rounded-2xl bg-white">
        {
          units.map(unit => (
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full text-gray-700 justify-between rounded-lg px-4 py-8 text-left text-sm font-medium hover:bg-gray-100 focus:outline-none focus-visible:ring">
                    <span>{unit.name}</span>
                    <ChevronDownIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-6 w-6 text-gray-700`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email us
                    within 90 days and we'll refund you in full, no questions asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))
        }
        <div className="flex w-full text-gray-700 justify-center rounded-lg px-4 py-8 text-left text-sm font-medium hover:bg-gray-100 focus:outline-none focus-visible:ring">
          
        </div>
      </div>
    </>
  )
}

export default Employees