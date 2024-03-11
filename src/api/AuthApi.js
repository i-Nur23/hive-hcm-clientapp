import axios from "axios";
import { BaseApi } from "./BaseApi";

export default class AuthApi extends BaseApi {
  
  static async register(name, surname, companyName, email, password) {
    
    const body = {
      name: name,
      surname: surname,
      companyName: companyName,
      email: email,
      password: password
    }
    
    return await axios.post(
      `${this.userServiceUrl}/auth/registrate`,
      body
    )
  }

  static async login(email, password) {
    const body = {
      email: email,
      password: password
    }

    return await axios.post(
      `${this.userServiceUrl}/auth/login`,
      body
    )
  }
}