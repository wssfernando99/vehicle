import React, { useState } from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Validation from'./Loginvalidation';
import axios from 'axios';

export const Login = () => {
    const strtstartValue = true;
    // const emailId = 'emailid';
    // const passwordId = 'passwordid';
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({

    })

    const handleSubmit =(event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);

        if (!Object.values(validationErrors).some(error => error !=="")){
            axios.post('http://localhost:8082/user/login', values)
                .then(res => {
                    if(res.data === "Successfully Logged in!"){
                        navigate('/Homepage'); 
                     }
                    else{
                        alert("No record exixted");
                    }
                })
                .catch(err => console.log(err));
        }
    }
    const handleInput =(event) => {
        setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }
  return (
    <div className='wrapper' strtstart={strtstartValue.toString()}>
        <form action='' className='loginform' onSubmit={handleSubmit}>
            <div className="container">
                <div className="loginhead">
                    <h1>Login</h1>
                </div>
                <div className="loginemail">
                    <div><label  className='lemail'>Email :</label></div>
                    <div className='emailsection'><input type='text' className='iemail' 
                    onChange={handleInput} name='email'></input>
                    {errors.email && <span className='text-warning'>{errors.email}</span>}
                    </div>
                </div>
                <div className="loginpassword">
                    <label className='lpassword'>Password :</label>
                    <div className='passwordsection'>
                    <input type="password"  className='ipassword' onChange={handleInput}
                    name='password' ></input>
                    {errors.password && <span className='text-warning'>{errors.password}</span>}
                    </div>
                    
                </div>
                <div className="submitform">
                    <div className='loginbutton'>
                    <button className='lbutton' id='lbutton' type='submit'>login</button>
                    </div>
                    <Link to="/Register"><div className="registerlink">
                    <p>Craete an Account</p>
                    </div></Link>
                    
                </div>
            </div>   
        </form>
        
    </div>
  )
}
