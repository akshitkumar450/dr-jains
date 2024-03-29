import { BeatLoader } from "react-spinners"

function Loader({ loading }) {
    return (
        <div className='flex justify-center items-center h-[100vh]' >
            <BeatLoader color='#0075cc' loading={loading} speedMultiplier='0.9' />
        </div>
    )
}

export default Loader
