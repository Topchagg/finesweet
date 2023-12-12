function InputFileItem (props) {
    return (
    <>
        <label htmlFor={props.id} className="input-file">
            <div className="input-file-wrapper">
                <div className="input-file-title">{props.text}</div>
                <div className="downloaded">{props.downloaded}</div>
            </div>
        </label>
        <input onChange={(e) => (props.handleImg(e))} id={props.id} className='file-input-hide' type="file"/>
    </>
    )
}

export default InputFileItem