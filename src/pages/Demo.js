import NavbarHeader from '../components/NavbarHeader';
import DemoLeft from '../components/Demo/DemoLeft';
import DemoRight from '../components/Demo/DemoRight';
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer/Footer';

function Demo() {
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
                    <div
                        style={{
                            backgroundImage: "linear-gradient(#E0EFFF,#EFF5FC)",
                        }}>
                        <NavbarHeader />
                        <div className="max-w-6xl mx-auto pt-28 lg:grid grid-cols-2 ">
                            <div className='px-3 lg:px-0'>
                                <DemoLeft />
                            </div>
                            <div className='px-3 lg:px-0'>
                                <DemoRight />
                            </div>
                        </div>
                        <Footer />
                    </div>
                )
            }
        </>
    )
}

export default Demo
