
import EmployeeBlock from '../components/employeeBlock'

import '../styles/aboutOurTeam.css'

function AboutTeamSection () {
    return (
        <div className="about-team-section">
            <div className="about-team-title-wrapper header-one">
                Meet our team
            </div>
            <div className="employes-wrapper">
                <EmployeeBlock name={'Delver MacConahy'} position={'Sales Manager'} />
            </div>
        </div>
    )
}

export default  AboutTeamSection