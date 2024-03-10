export default function EmailInput ({value, setValue, label}) {
  return(
    <div className="input">
      <label>{label}</label>
      <input type="email" value={value} onChange={setValue}/>
    </div>
  )
}