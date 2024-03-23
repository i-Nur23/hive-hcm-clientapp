import { addYears } from "date-fns";
import ReactDatePicker, { setDefaultLocale } from "react-datepicker";
import { ru } from "date-fns/locale"

import "react-datepicker/dist/react-datepicker.css";


const DateInput = ({
  label,
  date,
  setDate
}) => {

  setDefaultLocale("ru", ru)

  return(
    <div className="input w-1/4">
      <label>{label}</label>
      <ReactDatePicker
        locale="ru"
        showPopperArrow={false}
        showMonthDropdown
        showYearDropdown
        yearDropdownItemNumber={15}
        scrollableYearDropdown
        dateFormat="dd.MM.yyyy"
        className="w-full"
        selected={date}
        onChange={setDate}
        minDate={addYears(new Date(), -100)}
        maxDate={addYears(new Date(), -12)}

      />
    </div>
  )
}

export default DateInput