"use client"

const BoardLoading = () => {
  return(
    <div className="h-[90vh] flex flex-col justify-center">
      <div className="flex flex-col">
        <div className="flex justify-center mb-8">
          <img className="w-[10%]" src="/bee_loading.png"/>
        </div>
        <p className="text-center text-amber-900 text-2xl">Загрузка...</p>
      </div>
    </div>
  )
}

export default BoardLoading