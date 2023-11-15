
import '../styles/CommentBlock.css'

function CommentBlock (props) {
    return (
        <div className="comment-block">
            <div className="comment-content">
                <div className="user-info">
                    <div className="user-avatar-wrapper">
                        <img src={props.img} alt="" />
                    </div>
                    <div className="username-place-wrapper">
                        <div className="username title-two">
                            {props.name}
                        </div>
                        <div className="place caption">
                            {props.city}
                        </div>
                    </div>
                </div>
                <div className="comment-text title-two">
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default CommentBlock;