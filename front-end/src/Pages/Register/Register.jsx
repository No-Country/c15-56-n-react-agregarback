import './register.css'
import imgGoogle from '../../assets/google.png'
import imgFacebook from '../../assets/facebook.png'

import { useState } from 'react';

export default function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Se puede manejar la logica del envio
    alert('Formulario enviado:', { nombre, email, password });
  };

  return (
    <>
      <div className='container-register'>
        <section className='img-register'>
            <img src="img-register.png" className='img-size-register' alt="Image register" />
        </section>
        <div className="right-form">
            <h1 className='h1-register'>Get Started With <span className='color-celeste'>HereMeNow</span>!</h1>
            <p className='color-getting'>Getting started is easy</p>
            <div className='cont-google-facebook'>
              <div className='cont-google'><img src={imgGoogle} alt="" className='img-google'/><button>Google</button></div>
              <div className='cont-facebook'><img src={imgFacebook} alt="" className='img-facebook'/><button>Facebook</button></div>
            </div>
            <p>Or continue with</p>
            <form className='form-register' onSubmit={handleSubmit}>
                <input
                    className='button-size-style'
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder='Full Name'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />

                <input
                    className='button-size-style'
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Enter Email'
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

                <input
                    className='button-size-style'
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder='Confirm Password'
                    required
                />

            <button
              onClick={handleSubmit}
              className='but-create'
              type="submit">Create Account</button>
          </form>
          <p>Have an account? <span className='reg-sign-in'>Sign in!</span></p>
          <p className='p-terms-use'>By continuing you indicate that ytou read and agreed to the Terms of Use</p>
        </div>
      </div>
    </>
  );
}
