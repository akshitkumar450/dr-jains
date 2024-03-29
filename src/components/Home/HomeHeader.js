import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Typewriter from "typewriter-effect";

function Header() {
  const [random, setRandom] = useState(0);

  useEffect(()=>{
    let number=0;
    const interval = setInterval(() => {
      number+=1
      // nned to checks
      setRandom(`${number}+`)
    }, (10));
    return ()=>clearInterval(interval)
  },[])
  return (
    <>
      <div className="header p-5 lg:px-8">
        <div className="lg:grid grid-cols-2 place-items-center mt-20 lg:mt-32 lg:px-5 ">
          <div className="mt-14 lg:mt-0 col-span-1">
            <div className="grid place-items-center">
              <div className="px-2 lg:px-0 grid w-10/12 place-items-center">
                  <img
                    src="/images/main-photo.png"
                    className="w-3/4 lg:w-full transform-gpu scale-110  object-contain"
                    alt="admin-view"
                  />
              </div>
            </div>
          </div>

          <div className="px-1 lg:px-0 col-span-1 text-center pb-5">
            <h1 className="text-[#186FC5] filter drop-shadow-xl text-[23px] lg:text-5xl font-bold flex items-center justify-center capitalize">
              <span
                className="px-2 text-[23px] lg:text-5xl font-semibold 
                text-[#0964d7]">
                <Typewriter
                  options={{
                    strings: [
                      "Book Your Appointment",
                      "Access Your Health"
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <br />

            <p className="text-[#2A3158] text-xl font-semibold mt-2 mb-5">
              Superspeciality Clinic. Expertise. Value. Quality. Care. Convenience.
            </p>
            <p className="text-2xl font-bold text-[#34c22f] mt-2 mb-5">
              Over 40+ years of experience
            </p>

            <div className="my-10">
              <Link
                to="/demo"
                target="_blank"
                className="text-white rounded-md px-4 py-2 bg-[#df7324]">
                Consult Now
              </Link>
            </div>

            <p className="text-[#2A3158] text-2xl my-5">
              {`${random} Cases Treated. Book your Consultation Now ! `}
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Header;
