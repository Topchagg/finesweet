import '../styles/FeatureBlock.css'


function FeatureBlock (props) {
    return (
        <div className="feature-block">
            <div className="feature-block-img-wrapper">
                <img src={props.img} alt="" />
            </div>
            <div className="feature-block-title title-one">
                {props.title}
            </div>
            <div className="feature-block-text caption">
                {props.text}
            </div>
        </div>
    )
}
export default FeatureBlock