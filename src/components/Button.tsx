

function Button({text,onClick}: {text: string, onClick: () => void}){
  return (
    <div className="button" onClick={onClick}>
      <span className="content">
        <span>
        {text}
        </span>
      </span>
    </div>
  )
}

export default Button