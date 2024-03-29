import React from 'react'
import NavbarHeader from '../components/NavbarHeader';
import FeatureHeader from '../components/Features/FeatureHeader';
import FeaturesRows from '../components/Features/FeaturesRows';
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import { Helmet } from "react-helmet";
import Footer from '../components/Footer/Footer';

function Features() {

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
                            <FeatureHeader />
                        </div>
                        <div className=" mx-auto px-2 lg:px-0">
                            <FeaturesRows />
                        </div>
                      
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default Features
