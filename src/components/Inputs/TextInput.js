export default function TextInput ({value, setValue, label}) {
  return(
    <div className="input">
      <label>{ label }</label>
      <input type="text" value={ value } onChange={ setValue }/>
    </div>
  )
}