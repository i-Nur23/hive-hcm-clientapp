import { makePersistable } from "mobx-persist-store";

const { makeAutoObservable } = require("mobx");

class UserDispatch {
  
  user = null 
  
  constructor(){
    makeAutoObservable(this)

    makePersistable(this, { 
      name: 'UserDispatch',
      properties: ['user'],
      storage: window.localStorage
    })
  }
}

export default new UserDispatch()