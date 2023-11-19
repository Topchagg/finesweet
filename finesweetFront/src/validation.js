
export function validate(state, setIsValid, amountCondition, ){
    if(state.length >= parseInt(amountCondition)){
        setIsValid(false)
        return false;
    }
    else{
        setIsValid(true)
        return true;
    }
}

export function handleDecline(funcsToSet){
    for(let i = 0; i < funcsToSet.length; i++){
        funcsToSet[i]('');
    }
}
