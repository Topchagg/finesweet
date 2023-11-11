
import '../styles/feature.css'

function Feature(props) {
    return (
        <div className="feature">
            <div className="img-wrapper">
                <img src={props.img} alt="" />
            </div>
            <div className="feature-text-wrapper">
                <div className="header-feature title-two">
                    {props.title}
                </div>
                <div className="text-feature body-big-text">
                {props.text}
                </div>
            </div>
        </div>
    )
}

export default Feature