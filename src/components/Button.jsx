const Button = ({ heading, classes, text, icon }) => {
  const readAttr = obj => {
    let data = ""
    for (const prop in obj) {
      data += prop === obj[prop] ? `${prop} ` : `${prop}="${obj[prop]}" `
    }
    return data
  }

  const readClasses = (arr) => {
    return arr ? arr.join(" ") : ""
  }

  return (
    <div>
      <h6 className="subtitle">
        &#60;Button {readAttr(heading)}/&#62;
      </h6>
      <button className={`btn ${readClasses(classes)}`}>
        {icon}{text}
      </button>
    </div>
  )
}

Button.defaultProps = {
  text: 'Default',
}

export default Button
