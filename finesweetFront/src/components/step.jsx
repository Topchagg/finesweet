
function Step(props){
    return (
        <div className="step">
            <h1>{props.numeric}</h1> <span className='title-one'>{props.title}</span>
            <div className="small-text-step body-text-small">{props.text}</div>
        </div>
    )
}

export default Step