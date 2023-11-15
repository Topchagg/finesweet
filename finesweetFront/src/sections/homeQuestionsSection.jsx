
import Question from '../components/question'

import '../styles/HomeQuestionSection.css'

function HomeQuestionSection () {
    return (
        <div className="home-question-section">
            <div className="home-question-title header-three">
                Frequently Asked Questions
            </div>
            <div className="questions-wrapper">
                <div className="question-block">
                    <Question title={'How long should a car repair take?'} text={'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet'} />
                </div>
                <div className="question-block">
                    <Question title={'How long should a car repair take?'} text={'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet'} />
                </div>
                <div className="question-block">
                    <Question title={'How long should a car repair take?'} text={'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet'} />
                </div>
                <div className="question-block">
                    <Question title={'How long should a car repair take?'} text={'I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet'} />
                </div>
            </div>
        </div>
    )
}

export default HomeQuestionSection