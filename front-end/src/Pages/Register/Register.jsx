import './register.css'
import imgGoogle from '../../assets/google.png'
import imgFacebook from '../../assets/facebook.png'
import { useForm } from 'react-hook-form'
import { registerRequest } from '../../api/auth'



export default function Register() {

  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async(values) => {
    console.log(values)
    const res = await registerRequest(values)
    console.log(res)
  })

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
            <form className='form-register' onSubmit={onSubmit}>
                <input className='button-size-style' type="text" {...register("username",{ required: true })} placeholder='Full Name' />

                <input className='button-size-style' type="email" {...register("email",{required: true})} placeholder='Enter Email' />
              
                <input className='button-size-style' type="password"  {...register("password",{required: true})} placeholder='Password' />
{/* 
                <input className='button-size-style' type="password" id="confirm-password" name="confirm-password" placeholder='Confirm Password'  required /> */}

            <button type="submit" className='but-create'>
              Create Account
            </button>
          </form>
          <p>Have an account? <span className='reg-sign-in'>Sign in!</span></p>
          <p className='p-terms-use'>By continuing you indicate that ytou read and agreed to the Terms of Use</p>
        </div>
      </div>
    </>
  );
}
