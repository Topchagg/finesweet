
export function validate(state, setIsValid, amountCondition){
    if(state.length > parseInt(amountCondition)){
        setIsValid(false)
        return false;
    }
    else{
        setIsValid(true)
        return true;
    }
}

export function handleDecline(funcsToSet, showState){
    for(let i = 0; i < funcsToSet.length; i++){
        funcsToSet[i](true);
        showState(false)
    }
}

export function isImage(nameOfImg) {
    const fileExstension = '';
    for(let i = -1; i !== -4; i--){
        fileExstension += nameOfImg
    } 
    if(fileExstension == '.png' || fileExstension == 'jpeg' || fileExstension == '.svg' ){
        return true;
    }
    return false;
}
