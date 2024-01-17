function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    
    if(values.name === ''){
        error.name = "Name is required"
    }
    else{
        error.name =''
    }
    if(values.email === ''){
        error.email = "Email required"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Email doesn't match"
    }
    else {
        error.email = ""
    }
    if(values.password === ''){
        error.password = "Password required"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Password doesn't match"
    }
    else {
        error.password = ""
    }
    return error;

}
export default Validation;
