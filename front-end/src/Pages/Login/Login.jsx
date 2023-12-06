import './login.css'
import imgGoogle from '../../assets/google.png'
import imgFacebook from '../../assets/facebook.png'

import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Se puede manejar la logica del envio
      console.log('Formulario enviado:', { email, password });
    };
  
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
              <form className='form-login' onSubmit={handleSubmit}>
                  <input
                      className='button-size-style'
                      type="email"
                      id="email"
                      name="email"
                      placeholder='Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
                
                  <input
                      className='button-size-style'
                      type="password"
                      id="password"
                      name="password"
                      placeholder='Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                  />
  
              <button
                className='but-log-in'
                type="submit">Log In</button>
            </form>
            <p>Don’t have an account? <span className='reg-sign-in'>Sign up!</span></p>
          </div>
          <section className='img-login'>
              <img src="img-login.png" className='img-size-login' alt="Image login" />
          </section>
        </div>
        
      </>
    );
}
