
function RequestForm () {
    return (
                        <>
                        <form action="" className='form-item-wrapper'>
                            <div className="contact-input-item">
                                <input className='white-input' type="text" placeholder='Your full name'/>
                            </div> 
                            <div className="contact-input-item">
                                <input className='white-input' type="text" placeholder='Phone number'/>
                            </div>
                            <div className="contact-input-item">
                                <input className='white-input' type="text" placeholder='Your email (optional)'/>
                            </div>
                            <div className="contact-input-item">
                                <input className='white-input' type="text" placeholder='Message (optional)'/>
                            </div>
                        </form>
                        </>
    )
}

export default RequestForm