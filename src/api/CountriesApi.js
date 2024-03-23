import axios from "axios";
import { BaseApi } from "./BaseApi";

export default class CountriesApi extends BaseApi {
  static getAllCountries = async () => {
    return axios.get(`${this.employeeServiceUrl}/employees/countries`)
  }
}