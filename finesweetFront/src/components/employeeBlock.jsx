
import '../styles/EmployeeBlock.css'

function EmployeeBlock (props) {
    return (
        <div className="employee-block">
            <div className="emplyee-img-wrapper">
                <img className='employee-img' src={props.img} alt="" />
            </div>
            <div className="employe-info-wrapper">
                <div className="name-employee-wrapper title-two">
                    {props.name}
                </div>
                <div className="employee-position caption">
                    {props.position}
                </div>
            </div>
        </div>
    )
}

export default EmployeeBlock