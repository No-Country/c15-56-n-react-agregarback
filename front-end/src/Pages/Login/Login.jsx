import './login.css'
import imgGoogle from '../../assets/google.png'
import imgFacebook from '../../assets/facebook.png'
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

// import { useState } from 'react';

export default function Login() {

    const{register, handleSubmit, formState: {errors}, } = useForm();
    const {signin} = useAuth()

    const onSubmit = handleSubmit((data) => {
      signin(data)
    })
  
    return (
      <>
        <div className='container-login'>
          <div className="right-form">
              <h1 className='h1-login'>Welcome Back</h1>
              <p className='color-login-into'>Login into your account</p>
              <div className='cont-google-facebook'>
                <div className='cont-google'><img src={imgGoogle} alt="" className='img-google'/><button>Google</button></div>
                <div className='cont-facebook'><img src={imgFacebook} alt="" className='img-facebook'/><button>Facebook</button></div>
              </div>
              <p>Or continue with</p>

              <form className='form-login' onSubmit={onSubmit}>

                <input className='button-size-style' type="email" {...register("email",{required: true})} placeholder='Enter Email' />
                {
                  errors.email && <p className='text-red-500'>Email is required</p>
                }
              
                <input className='button-size-style' type="password"  {...register("password",{required: true})} placeholder='Password' />
                {
                  errors.password && <p className='text-red-500'>Password is required</p>
                }
  
              <button
                className='but-log-in'
                type="submit">Log In</button>
            </form>
            <p>Don’t have an account? <span className='reg-sign-in'><Link to={'/register'}> Sign up!</Link></span></p>
          </div>
          <section className='img-login'>
              <img src="img-login.png" className='img-size-login' alt="Image login" />
          </section>
        </div>
        
      </>
    );
}
