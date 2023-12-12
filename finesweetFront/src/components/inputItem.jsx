
function Inputitem (props) {
            return (
                <input onChange={(e) => (props.setFunc(e))} value={props.defaultValue} defaultValue={props.defaultValue} className="white-input" type={props.type} placeholder={props.placeholder}/>
            )
}

export default Inputitem