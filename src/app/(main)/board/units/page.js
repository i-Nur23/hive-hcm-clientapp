"use client"

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { EmployeeApi } from "@/api"
import { useEffect, useState } from "react"
import { NewUserModal } from '@/components/modals'

const Employees = () => {

  const [units, setUnits] = useState([])
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false)
  const [isAddUnitModalOpen, setIsAddUnitModalOpen] = useState(false)

  const [unitId, setUnitId] = useState();

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
                    <span>{unit.fullName}</span>
                    <ChevronDownIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-6 w-6 text-gray-700`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pb-2 pt-4 text-sm text-gray-500">
                    <ul>
                      {unit.childunits?.map(childUnit => (
                        <li>{childUnit.fullName} | Рукоовдитель: {childUnit.lead.surname} {childUnit.lead.surname}</li>
                      ))}
                      {unit.workers?.map(worker => (
                        <li>{worker.name} {worker.surname}</li>
                      ))}
                    </ul>
                    <div className='grid grid-cols-2 gap-2'>
                        <div 
                          className="flex cursor-pointer bg-indigo-50 text-gray-700 justify-center rounded-lg px-4 py-8 text-left text-sm font-medium hover:bg-indigo-100"
                          onClick={e => {
                            setUnitId(unit.Id)
                            setIsAddEmployeeModalOpen(true)
                          }}
                        >
                          Новое подразделение
                        </div>
                        <div 
                          className="flex cursor-pointer bg-rose-50 text-gray-700 justify-center rounded-lg px-4 py-8 text-left text-sm font-medium hover:bg-rose-100"
                        >
                          Новый сотрудник
                        </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))
        }
        <div className="flex w-full bg-amber-50 text-gray-700 justify-center rounded-lg px-4 py-8 text-left text-sm font-medium hover:bg-amber-100 focus:outline-none focus-visible:ring" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg>
        </div>
      </div>

      <NewUserModal
        isOpen={isAddEmployeeModalOpen}
        closeModal={e => setIsAddEmployeeModalOpen(false)}
        unitId={unitId}
      />
    </>
  )
}

export default Employees