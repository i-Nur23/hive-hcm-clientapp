export default function DangerAlert({text, open, onClose}) {

  return (
    open ? 
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute top-[10px]" role="alert">
        <span class="block sm:inline pr-6">{text}</span>
        <span class="absolute top-0 bottom-0 right-0 px-3 py-3" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            class="w-6 h-6 cursor-pointer"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </span>
      </div>
    : null
  )
}