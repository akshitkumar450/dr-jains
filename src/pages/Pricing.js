import React from 'react'
import NavbarHeader from '../components/NavbarHeader';
import PricingForm from '../components/Pricing/PricingForm';
import PricingHeader from '../components/Pricing/PricingHeader';
import PricingPlan from '../components/Pricing/PricingPlan';
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import FAQs from '../components/Pricing/PricingFAQs';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer/Footer';

function Pricing() {
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
                        <div
                            style={{
                                backgroundImage: "linear-gradient(#E0EFFF,#EFF5FC)",
                            }}
                        >
                            <NavbarHeader />
                            <PricingHeader />
                        </div>
                        <div className="container mx-auto">
                            <PricingPlan />
                            <PricingForm />
                            <FAQs />
                        </div>
                        <Footer />

                    </>
                )
            }
        </>
    )
}

export default Pricing
