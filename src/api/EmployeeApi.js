import userDispatch from "@/store/userDispatch";
import { BaseApi } from "./BaseApi";
import axios from "axios";

export default class EmployeeApi extends BaseApi{
  static getPersonalInfo = async () => {
    
    return await axios.get(
      `${this.employeeServiceUrl}/employees/info`,
      {
        headers: {
          Authorization: 'Bearer ' + userDispatch.user.token
        }
      }
    )
  }

  static getUnits = async () => {

    return await axios.get(
      `${this.employeeServiceUrl}/employees/units`,
      {
        headers: {
          Authorization: 'Bearer ' + userDispatch.user.token
        }
      }
    )
  }
}