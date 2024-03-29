import React from 'react'
import HomeBenefits from '../components/Home/HomeBenefits';
import Header from '../components/Home/HomeHeader';
import NavbarHeader from '../components/NavbarHeader';
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer/Footer';
import HomeLead from '../components/Home/HomeLead';
import HomeTestimonials1 from '../components/Home/HomeTestimonials1';
import ServicesBenefits from '../components/Services/ServicesBenefits';

function Home() {

    const loading = useLoader()

    return (
        <>
            <Helmet>
                <title>
                Dr Jain Clinic

                </title>
                <meta name="robots" content="index, follow" />
            </Helmet>
            {
                loading ? (
                    <Loader loading={loading} />
                ) : (
                    <>
                        <NavbarHeader />
                        <Header />
                        <HomeLead />
                        <ServicesBenefits />
                        <HomeBenefits />
                        <HomeTestimonials1 />
                        <HomeLead />
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default Home
