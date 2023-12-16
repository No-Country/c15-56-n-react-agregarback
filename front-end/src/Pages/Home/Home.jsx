import './home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
        <section className='container-home'>
            <div className='home-text'>
                <h1 className='h1-home'>Find A <span className='color-green-white'>Job</span> That <span className='color-green-white'>Matches</span> Your Passion</h1>
                <button className='button-opportunities'><Link to={'/employments'}> See opportunities</Link></button>
            </div>
        </section>
  );
}
