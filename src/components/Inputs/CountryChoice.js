"use client"

import CountriesApi from "@/api/CountriesApi"
import { Listbox, Transition } from '@headlessui/react'
import { useEffect, useState, Fragment } from "react"
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const CountryChoice = ({
  country,
  setCountry
}) => {

  const [countries, setCountries] = useState()
  
  useEffect(() => {
    (
      async () => {
        CountriesApi.getAllCountries()
        .then(response => setCountries(response.data))
      }
    )()
  },[])

  return (
    <Listbox value={country} onChange={setCountry}>
        <div className="relative input">
          <Listbox.Label className="relative">Страна</Listbox.Label>
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left">
            <span className="flex gap-2 truncate">
              <div className="w-[5%] flex flex-col justify-center">
                <img src={country?.urlPng} className="h-4 border border-gray-400"/>
              </div>
              {country?.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            className="z-10"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute top-[100%] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {countries?.map(country => (
                <Listbox.Option
                  key={country?.isoCode}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-3 pr-4 ${
                      active ? 'bg-amber-200 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={country}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`truncate flex gap-2 ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        <div className="w-[5%] flex flex-col justify-center">
                          <img src={country?.urlPng} className="h-4 border border-gray-400"/>
                        </div>
                        {country?.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 right-[1.5rem] flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
  )
}

export default CountryChoice