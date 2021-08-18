const Button = ({label, text, color, size, variant, disableShadow, disabled, startIcon, endIcon}) => {
  return (
    <div>
      <h6 className="subtitle">
        &#60;Button {
          (label) && (
            Object.entries(label)
                  .map(([key, val]) => (key === val) ? `${key}` : `${key}="${val}"`)
                  .join(" ")
          )
        } /&#62;
      </h6>
      <button className={`btn ${color} 
                              ${size} 
                              ${variant} 
                              ${disableShadow && "disableShadow"} 
                              ${disabled && "disabled"} 
                              ${startIcon && "start-icon"} 
                              ${endIcon && "end-icon"}`}>
        <span className="material-icons" style={{fontSize: '16px'}}>
          {startIcon || endIcon}
        </span>
        {text}
      </button>
    </div>
  )
}

Button.defaultProps = {
  text: 'Default',
}

export default Button
