import { useState } from 'react'
import { Link } from 'react-router-dom'
import './employments.css'

export default function Employments() {
    const [text, setText] = useState('')

    return (
        <div className="container-employ">
            <div className="main-employ">
                <span className='cont-text-search'>
                <h1 className='title-employ'>Find your dream jobs through <span style={{color: "#4466FB"}}>HereMeNow</span> easily!</h1>
                <input type="text" placeholder='Search' className='search-employ' value={text} onChange={(e) => setText(e.target.value)}/>
                </span>
                <img src="maletin.svg" alt="Maletin" className='maletin-employ'/>
            </div>
            <div className="container-checkboxes">
                <label className='label-checkbox'><input type="checkbox" name='checkboxfront' className='input-checkbox' />Front-End</label>
                <label className='label-checkbox'><input type="checkbox" name='checkboxback' className='input-checkbox' />Back-End</label>
                <label className='label-checkbox'><input type="checkbox" name='checkboxfull' className='input-checkbox' />Full-Stack</label>
                <label className='label-checkbox'><input type="checkbox" name='checkboxuxui' className='input-checkbox' />UX/UI</label>
                <label className='label-checkbox'><input type="checkbox" name='checkboxqa' className='input-checkbox' />Testing/QA</label>
                <label className='label-checkbox'><input type="checkbox" name='checkboxdevsops' className='input-checkbox' />DevOps</label>
                <label className='label-checkbox'><input type="checkbox" name='checkboxpm' className='input-checkbox' />Proyect Manager</label>
            </div>

            <section className='pedro'>
            <div className='vista-employ'>
                <h1 className='title-vista-employ'>Desarrollador Full-Stack MERN</h1>
                <div className='vista-employ-columns'>
                    <p className='team-vista-employ'>Maximo Team</p>
                    <div className="salary-employ">
                        <img src="icSalary.svg" alt="Icon Salary" />
                        <span>
                            <p className='salary-vista-employ'>$14.000 - $25.000</p>
                            <p className='paysalary-vista-employ'>Monthly salary</p>
                        </span>
                    </div>
                    <div className="location-employ">
                        <img src="icLocation.svg" alt="Icon Location" />
                        <span>
                            <p className='locat-vista-employ'>London - England</p>
                            <p className='type-vista-employ'>Remote/Hybrid</p>
                        </span>
                    </div>
                    <img src="Favorito.svg" alt="Icon Favorito" />
                    <a href="#" className='btndetail-vista-emloy w-[200px] h-[75px]'><Link to={'/employments-details'}>More details</Link></a>
                    <a href="#" className='btnaplly-vista-employ max-w-[200px] max-h-[75px]'>Apply Now</a>
                </div>
            </div>
            {/* <div className='vista-employ'>
                <h1 className='title-vista-employ'>Desarrollador Full-Stack MEAN</h1>
                <div className='vista-employ-columns grid grid-cols-6'>
                    <p className='team-vista-employ'>Maximo Team</p>
                    <div className="salary-employ">
                        <img src="icSalary.svg" alt="Icon Salary" />
                        <span>
                            <p className='salary-vista-employ'>$14.000 - $25.000</p>
                            <p className='paysalary-vista-employ'>Monthly salary</p>
                        </span>
                    </div>
                    <div className="location-employ">
                        <img src="icLocation.svg" alt="Icon Location" />
                        <span>
                            <p className='locat-vista-employ'>London - England</p>
                            <p className='type-vista-employ'>Remote/Hybrid</p>
                        </span>
                    </div>
                    <img src="Favorito.svg" alt="Icon Favorito" />
                    <a href="#" className='btndetail-vista-emloy w-[200px] h-[75px]'><Link to={'/employments-details'}>More details</Link></a>
                    <a href="#" className='btnaplly-vista-employ max-w-[200px] max-h-[75px]'>Apply Now</a>
                </div>
            </div>
            <div className='vista-employ'>
                <h1 className='title-vista-employ'>Desarrollador Full-Stack JAVA</h1>
                <div className='vista-employ-columns grid grid-cols-6'>
                    <p className='team-vista-employ'>Maximo Team</p>
                    <div className="salary-employ">
                        <img src="icSalary.svg" alt="Icon Salary" />
                        <span>
                            <p className='salary-vista-employ'>$14.000 - $25.000</p>
                            <p className='paysalary-vista-employ'>Monthly salary</p>
                        </span>
                    </div>
                    <div className="location-employ">
                        <img src="icLocation.svg" alt="Icon Location" />
                        <span>
                            <p className='locat-vista-employ'>London - England</p>
                            <p className='type-vista-employ'>Remote/Hybrid</p>
                        </span>
                    </div>
                    <img src="Favorito.svg" alt="Icon Favorito" />
                    <a href="#" className='btndetail-vista-emloy w-[200px] h-[75px]'><Link to={'/employments-details'}>More details</Link></a>
                    <a href="#" className='btnaplly-vista-employ max-w-[200px] max-h-[75px]'>Apply Now</a>
                </div>
            </div>
            <div className='vista-employ'>
                <h1 className='title-vista-employ'>Desarrollador Full-Stack PHP</h1>
                <div className='vista-employ-columns grid grid-cols-6'>
                    <p className='team-vista-employ'>Maximo Team</p>
                    <div className="salary-employ">
                        <img src="icSalary.svg" alt="Icon Salary" />
                        <span>
                            <p className='salary-vista-employ'>$14.000 - $25.000</p>
                            <p className='paysalary-vista-employ'>Monthly salary</p>
                        </span>
                    </div>
                    <div className="location-employ">
                        <img src="icLocation.svg" alt="Icon Location" />
                        <span>
                            <p className='locat-vista-employ'>London - England</p>
                            <p className='type-vista-employ'>Remote/Hybrid</p>
                        </span>
                    </div>
                    <img src="Favorito.svg" alt="Icon Favorito" className='max-w-[54] max-h-[54px]'/>
                    <a href="#" className='btndetail-vista-emloy w-[200px] h-[75px]'><Link to={'/employments-details'}>More details</Link></a>
                    <a href="#" className='btnaplly-vista-employ max-w-[200px] max-h-[75px]'>Apply Now</a>
                </div>
            </div> */}

            </section>
            <div className="navigation-employ">
                <a href="#" className='btn-nav-employ'>{"<< Previous"}</a>
                <div className="nav-num-employ">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                </div>
                <a href="#" className='btn-nav-employ'>{"Next >>"}</a>
            </div>
        </div> 
    )
}