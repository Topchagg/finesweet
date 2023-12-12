import '../styles/blackbutton.css'

function BlackButton (props) {
    return (
        <button type="button" className='black-btn'>{props.text}</button>
    )
}

export default BlackButton