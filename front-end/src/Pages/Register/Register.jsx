import './register.css'
import imgGoogle from '../../assets/google.png'
import imgFacebook from '../../assets/facebook.png'
import { useForm } from 'react-hook-form'
// import { registerRequest } from '../../api/auth'
import { useAuth } from '../../context/AuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Register() {

  const { register, handleSubmit, formState:{errors}, } = useForm();
  const {signup, isAuthenticated} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate("/login");
  },[isAuthenticated]);

  const onSubmit = handleSubmit(async(values) => {
    // console.log(values)
    // const res = await registerRequest(values)
    // console.log(res)
    signup(values)
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
                {
                  errors.username && <p className='text-red-500'>Username is required</p>
                }
                <input className='button-size-style' type="email" {...register("email",{required: true})} placeholder='Enter Email' />
                {
                  errors.email && <p className='text-red-500'>Email is required</p>
                }
              
                <input className='button-size-style' type="password"  {...register("password",{required: true})} placeholder='Password' />
                {
                  errors.password && <p className='text-red-500'>Password is required</p>
                }
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
