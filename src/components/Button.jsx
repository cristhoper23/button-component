const Button = (props) => {
  // {text, color, size, variant, disableShadow, disabled, startIcon, endIcon}
  const readClasses = obj => {
    return Object.entries(obj)
                 .filter(arr => arr[0] !== 'text')
                 .map(([key, val]) => (
                   (val === true) ? key :
                   (key === "startIcon") ? "start-icon" :
                   (key === "endIcon") ? "end-icon" : val
                  ))
                 .join(" ")
  }

  return (
    <>
      <button 
        className={`btn ${readClasses(props)}`}>
        <span className="material-icons-round" style={{fontSize: '18px'}}>
          {props.startIcon || props.endIcon}
        </span>
        {props.text}
      </button>
    </>
  )
}

Button.defaultProps = {
  text: 'Default',
}

export default Button
