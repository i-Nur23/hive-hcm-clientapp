export default function PasswordInput ({value, setValue, label}) {
  return(
    <div className="input">
      <label>{ label }</label>
      <input type="password" value={ value } onChange={ setValue }/>
    </div>
  )
}