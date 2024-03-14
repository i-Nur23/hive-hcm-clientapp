"use client"

const { default: userDispatch } = require("@/store/userDispatch")
const { observer } = require("mobx-react")

const Main = observer(() => {
  return (
    <div>
      {userDispatch.user?.name}
    </div>
  )
})

export default Main