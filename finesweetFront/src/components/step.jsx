import { Link } from "react-router-dom"

function Step(props){
    return (
        <Link to={props.link}>
        <div className="step">
            <h1>{props.numeric}</h1> <span className='title-one'>{props.title}</span>
            <div className="small-text-step body-text-small">{props.text}</div>
        </div>
        </Link>
    )
}

export default Step