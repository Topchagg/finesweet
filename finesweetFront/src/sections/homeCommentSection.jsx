
import CommentBlock from '../components/commentBlock'

import '../styles/homeCommentsSection.css'

function HomeCommentSection () {
    return (
        <div className="home-comment-section">
            <p className='comment-section-title header-three'>Our customers say the nicest things about our service</p>
            <div className="comments-block-wrapper">
                <CommentBlock city={'New York'} name={'Jonathan Vallem'} text={'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working'} />
                <CommentBlock city={'London'} name={'Peter Griphin'} text={'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working'}/>
            </div>
            <div className="carousel-wrapper">
                <div className="buttons-wrapper">
                    <div className="to-left-btn carousel-btn">{'<<'}</div>
                    <div className="to-right-btn carousel-btn">{'>>'}</div>
                </div>
            </div>
        </div>
    )
}

export default HomeCommentSection