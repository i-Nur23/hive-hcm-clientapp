import axios from "axios";
import { BaseApi } from "./BaseApi";
import userDispatch from "@/store/userDispatch";

export default class UserApi extends BaseApi {

  static updateUserAsync = async (name, surname, patronymic, email, phone, countryCode, city, birthdate) => {
    
    var body = {
      name: name,
      surname: surname,
      patronymic: patronymic,
      email: email,
      phoneNumber: phone,
      countryCode: countryCode,
      city: city,
      birthDate: birthdate
    }
    
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