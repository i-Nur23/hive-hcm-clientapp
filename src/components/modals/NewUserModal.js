import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { TextInput, EmailInput } from '@/components/inputs'
import { useRouter } from 'next/navigation'

const NewUserModal = ({isOpen, closeModal, unitId}) => {

  const router = useRouter();

  const [name, setName] = useState()
  const [surname, setSurname] = useState()
  const [email, setEmail] = useState()

  const register = () => {
    router.reload();
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center font-medium leading-6 text-gray-900 mb-2"
                  >
                    Новый сотрудник
                  </Dialog.Title>
                    <div className="flex-col w-100 mx-3">
                      <form onSubmit={register}>
                        <TextInput
                          value={name}
                          setValue={e => setName(e.target.value)}
                          label="Имя"
                        />
                        <TextInput
                          value={surname}
                          setValue={e => setSurname(e.target.value)}
                          label="Фамилия"
                        />
                        <EmailInput
                          value={email}
                          setValue={e => setEmail(e.target.value)}
                          label="Email"
                        />
                        <button className="btn-primary w-full mb-2" type="submit">
                          Добавить
                        </button>
                      </form>  
                    </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  )
}

export default NewUserModal;