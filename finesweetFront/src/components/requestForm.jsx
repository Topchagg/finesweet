import { validate } from "../validation"
import { useState } from "react"

import { useCreateContactRequestMutation } from "../redux/fineSweetApi"

import OrangeBtn from "./orangeButton"

function RequestForm () {

    const [createContactRequest] = useCreateContactRequestMutation();

    const [fullname, setFullname] = useState('')
    const [fullnameIsValid, setFullNameIsValid] = useState(true)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(true)
    const [message, setMessage] = useState('')
    const [messageIsValid, setMessageIsValid] = useState(true)
    const [isResult, setIsResult] = useState(false)

    function handleInputFullName (e) {
        if(validate(e.target.value, setFullNameIsValid, 90)) {
            setFullname(e.target.value)
        }
    }
    
    function handleInputPhoneNumber (e) {
        if(validate(e.target.value, setPhoneNumberIsValid, 10)){
            setPhoneNumber(e.target.value)
        }
    }

    function handleInputMessage (e) {
        if(validate(e.target.value, setMessageIsValid, 300)){
            setMessage(e.target.value)
        }
    }

    const handleSubmitCreateRequest = async () =>  {
        if(fullname && phoneNumber && message && fullnameIsValid && phoneNumberIsValid && messageIsValid) {
            await createContactRequest({fullname: fullname,phoneNumber: phoneNumber, message: message}).unwrap();
            setMessage('')
            setFullname('')
            setPhoneNumber('')
            setIsResult(true)
        }
    }

    

    return (
        <>
            {isResult && <><h1>Thank you for request We`ll contact with you</h1></>}
            <form action="" className='form-item-wrapper'>
                <div className="contact-input-item">
                    <input onChange={(e) => (handleInputFullName(e))} value={fullname} className='white-input' type="text" placeholder='Your full name'/>
                </div> 
                <div className="contact-input-item">
                    <input onChange={(e) => (handleInputPhoneNumber(e))} value={phoneNumber} className='white-input' type="number" placeholder='Phone number'/>
                </div>
                <div className="contact-input-item">
                    <input onChange={(e) => (handleInputMessage(e))} value={message} className='white-input' type="text" placeholder='Message (optional)'/>
                </div>
                <div className="contact-btn-wrapper" onClick={() => (handleSubmitCreateRequest())}>
                    <OrangeBtn text={"Contact with me!"} />
                </div>
            </form>
        </>
    )
}

export default RequestForm