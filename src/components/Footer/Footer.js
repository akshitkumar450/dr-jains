import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import Copyright from './Copyright'

function Footer() {
    return (
        <>
            <div className={`${styles.footer} px-8 lg:px-16 py-10 grid lg:grid-cols-4`}>
                <div className='lg:col-span-1'>
                <div className='lg:col-span-1 mt-5 lg:mt-0'>
                    <Link to='/' >
                        <img
                            src="/images/jain-logo-1.png"
                            alt="dr-jain-logo"
                            className='bg-white px-2 py-1 w-1/3 mx-auto object-contain max-w-[300px] rounded-md'
                        />
                    </Link>
                </div>

                    <ul className='lg:ml-5'>
                        <li className="flex items-center mb-3">
                            <i className="fas fa-phone"></i>
                            <div>
                                <a className="ml-4 " href="#yourlink"> +91 9871312077</a>
                            </div>
                        </li>
                        <li className="flex items-center mb-3">
                            <i className="fas fa-envelope-open"></i>
                            <div >
                                <a className="ml-4 " href="#yourlink">docskjain@gmail.com</a>
                            </div>
                        </li>
                        <li className="flex items-start justify-between mb-3">
                            <i className="fas fa-address-book"></i>
                            <div>
                                <a className="ml-4 " href="#yourlink">
                                Dr Jain Homeo Excellence Clinic, 5, Pocket E, Sarita Vihar, New Delhi, Delhi 110044
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='lg:col-span-1 mt-3 lg:mt-0'>
                    <div >
                        <h4>About Us</h4>
                        <p>
                        Dedicated To Providing Quality  Healthcare for Your Family Since 1981.

                        </p>
                    </div>
                </div>

                <div className='ml-0 lg:col-span-1 lg:ml-20 mt-3 lg:mt-0'>
                    <div >
                        <h4>Our Clinics</h4>
                        <ul >

                            <li >
                                <div>
                                    <Link to='/respiratory-clinic'>Allergy & Respiratory Clinic</Link>
                                </div>
                            </li>
                            <li >
                                <div>
                                    <Link to='/mind-clinic'>Mind Clinic</Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="/stone-kidney-clinic"
                                    >Stone and Kidney Clinic</Link>
                                </div>
                            </li>
                            <li >
                                <div>
                                    <Link to='/thyroid-clinic'
                                    >Thyroid Clinic
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="/gynaecological-clinic"
                                    >Infertility, PCOS: Gynae Clinic
                                    </Link>
                                </div>
                            </li>
                            

                            <li >
                                <div>
                                    <Link to="/blogs">Skin & Hair Clinic
</Link>
                                </div>
                            </li>
                            <li >
                                <div>
                                    <Link to="/respiratory"> Respiratory
</Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="/childimmunity-clinic"
                                    >Child Immunity Clinic

                                    </Link>
                                </div>
                            </li>
                            
                            <li>
                                <div>
                                    <Link to="/cancer"
                                    >Cancer & Old Age Clinic

                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="/eula"
                                    >Piles, Liver, Stomach: GI Clinic

                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Link to="/eula"
                                    >Neuro & Joint: Pain Clinic


                                    </Link>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <div className='lg:col-span-1 mt-5 lg:mt-0'>
                    <Link to='/' >
                        <img
                            src="/images/jain-logo-1.png"
                            alt="Dr-jain-logo"
                            className='bg-white px-2 py-1 w-1/2 mx-auto object-contain max-w-[300px] rounded-md'
                        />
                    </Link>
                </div>
            </div>
            <Copyright />
        </>
    )
}

export default Footer
