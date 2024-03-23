export default function PhoneInput ({value, setValue, label}) {
  return(
    <div className="input">
      <label>{ label }</label>
      <input type="tel" value={ value } onChange={ setValue }/>
    </div>
  )
}