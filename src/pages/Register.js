import React , {useState }from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Validation from './Registervalidation';
import axios from 'axios';
import  {useNavigate} from 'react-router-dom';

export const Register = () => {
    const strtstartValue = true;
    
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({

    })
    const navigate = useNavigate();
    // const handleSubmit =(event) => {
    //     event.preventDefault();
    //     setErrors(Validation(values));
    //     if(errors.name === "" && errors.email === "" && errors.password === ""){
    //         axios.post('http://localhost:8082/signup', values)
    //         .then(res => {
    //             navigate('/');
    //         })
    //         .catch(err => console.log(err));
    //     }
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);
    
        if (!Object.values(validationErrors).some(error => error !== "")) {
            axios.post('http://localhost:8082/signup', values)
                .then(res => {
                    navigate('/Login');
                })
                .catch(err => console.log(err));
        }
    }
    
    const handleInput =(event) => {
        setValues(prev => ({...prev,[event.target.name]: event.target.value}))
    }
  return (
    <div className='wrapper' strtstart={strtstartValue.toString()}>
        
        <form className='registerform' onSubmit={handleSubmit}>
            <div className="container">
                <div className="registerhead">
                    <h1>Register</h1>
                </div>
                <div className="registername">
                    <label  className='lname' id='lname'>Name :</label>
                    <div className='rnamesection'>
                    <input type="text" className='iname'  onChange={handleInput}
                    name='name' ></input>
                    {errors.name && <span className='text-warning'>{errors.name}</span>}
                    </div>
                </div>
                <div className="registeremail">
                    <div><label className='lemail'>Email :</label></div>
                    <div className='remailsection'><input type='text' className='iemail' 
                    onChange={handleInput} name='email' ></input>
                    {errors.email && <span className='text-warning'>{errors.email}</span>}
                    </div>
                </div>
                <div className="registerpassword">
                    <label  className='lpassword' id='lpassword'>Password :</label>
                    <div className='rpasswordsection'>
                    <input type="password"  className='ipassword'  onChange={handleInput}
                    name='password'></input>
                    {errors.password && <span className='text-warning'>{errors.password}</span>}
                    </div>
                </div>
                
                <div className="submitform">
                    <div className='registerbutton'>
                    <button type='submit' className='rbutton' id='rbutton'>Register</button>
                    </div>
                    <Link to="/Login"><div className="loginlink">
                    <p>Already have an Account</p>
                    </div></Link>
                    
                </div>
            </div>   
        </form>
        
    </div>
    
  )
}

