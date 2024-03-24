import axios from "axios";
import { BaseApi } from "./BaseApi";
import userDispatch from "@/store/userDispatch";

export default class UserApi extends BaseApi {

  static updateUserAsync = async (name, surname, patronymic, email, phone, countryCode, city, birthdate) => {
    
    var body = {
      name: name,
      surname: surname,
      patronymic: typeof(patronymic) === "undefined" ? null : patronymic,
      email: email,
      phoneNumber: typeof(phone) === "undefined" ? null : phone,
      countryCode: typeof(countryCode) === "undefined" ? null : countryCode,
      city: typeof(city) === "undefined" ? null : city,
      birthDate: typeof(birthdate) === "undefined" ? null : birthdate
    }

    console.log(body)
    
    return await axios.post(
      `${this.userServiceUrl}/users/update`,
      body,
      {
        headers: {
          'Authorization': `Bearer ${userDispatch.user.token}`
        }
      }
    )
  }

  static updatePasswordAsync = async (oldPassword, newPassword) => {
    
    var body = {
      newPassword: newPassword,
      oldPassword: oldPassword
    }
    
    return await axios.post(
      `${this.userServiceUrl}/users/password`,
      body,
      {
        headers: {
          'Authorization': `Bearer ${userDispatch.user.token}`
        }
      }
    )
  }
}