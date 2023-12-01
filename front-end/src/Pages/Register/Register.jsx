import './register.css'


import { useState } from 'react';

export default function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    console.log('Formulario enviado:', { nombre, email, password });
  };

  return (
    <>
      <div className='container-register'>
        <section className='img-register'>
            <img src="img-register.png" className='img-size-register' alt="Image register" />
        </section>
        <div className="right-form">
            <h1 className='h1-register'>Get Started With <span className='color-celeste'>HereMeNow</span>!</h1>
            <form className='form-register' onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />

                <label htmlFor="email">Correo electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

            <button type="submit">Registrarse</button>
          </form>
        </div>
      </div>
    </>
  );
}
