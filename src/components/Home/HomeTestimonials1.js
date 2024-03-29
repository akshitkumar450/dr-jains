import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HomeTestimonials1() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="home-slider lg:px-5 my-20 lg:my-0">
      <h1 className="text-3xl font-bold text-center text-[#186FC5]">
        Testimonials
      </h1>
      <div className="">
        <div className={`text-gray-600  rounded-lg w-3/4 lg:w-full mx-auto`}>
          <Slider {...settings}>
            <div>
              <div className="col-span-1 px-5 mt-5 rounded-lg">
                <div>
                  <h5>
                  Dr. Jain is our family physician for the last 25 years. Would like to share the wonderful treatment of my son who was then 9 years old for treating his hearing problem due to adenoids after Doctors in Ganga Ram Hospital had recommended surgery for the same without assuring restoration of full hearing power. 
                  </h5>
                  <h5>
                  Strongly recommend his name to all my friends and relatives.
                  </h5>
                </div>
                <h1 className="text-xl font-bold my-2">Anisha Ghei</h1>
              </div>
            </div>

            <div>
              <div className="col-span-1 px-5 py-8  rounded-lg">
                <h5>
                Dr. Jain's homeo excellence Clinic is an exceptional homeopathic treatment service provider. Me and my family have been a loyal patient for over 25 years, and I can confidently say that they are excellent. They are always polite, and the clinic itself has a homely atmosphere. 
                
                </h5>
                <h5>
                The accuracy of their treatments is highly commendable.
                </h5>
                <h1 className="text-xl font-bold my-2">Bhavya Chopra</h1>
              </div>
            </div>

            <div>
              <div className="col-span-1 px-5 py-8  rounded-lg">
                <h5>
                Dr. Surbhi is very talented and experienced doctor, I was sufferring from recurrent cold due to sinusitis and was also suffering from knee pain from many years and once i started medication from her, i started feeling relief and her medicines worked really quick on me.

                </h5>
                <h5>
                She is such an amazing doctor and listens very patiently and talk very politely.
                </h5>
                <h1 className="text-xl font-bold my-2">Ritu Jain</h1>
              </div>
            </div>

            <div>
              <div className="col-span-1 px-5 py-8  rounded-lg">
                <h5>
                Dr Jain is extremely experienced doctor. He has helped my mom reverse her fatty liver from grade 3 to grade 1 with his medicines.
High recommendations for him if someone is looking for correct guidance.
                </h5>
                <h1 className="text-xl font-bold my-2">Suruchi Gakhar</h1>
              </div>
            </div>

            <div>
              <div className="col-span-1 px-5 py-8  rounded-lg">
                <h5>
                Thanks to the Dr.Saurabh Jain, I finally found relief from my thyroid symptoms.Their personalized approach and thoughtful treatment plan have alleviated my fatigue. I'm grateful for their guidance, which has brought a glimmer of hope to my health journey. If you're struggling, seek out a knowledgeable doctor it makes all the difference.
                </h5>
                <h5>I'm grateful for their guidance, which has brought a glimmer of hope to my health journey. If you're struggling, seek out a knowledgeable doctor it makes all the difference.
                </h5>
                <h1 className="text-xl font-bold my-2">Amrita</h1>
              </div>
            </div>

            <div>
              <div className="col-span-1 px-5 py-8  rounded-lg">
                <h5>
                Dr.Jain's excellence clinic is worth to go place.I have been visiting Doctor jain for the past one year for my stomach issues and believe me it's like miracle.
I have also Consulted him for my son's stomach isssue and it worked like anything.
                </h5>
                <h1 className="text-xl font-bold my-2">Shaista Khan</h1>
              </div>
            </div>
            
            <div>
              <div className="col-span-1 px-5 py-8  rounded-lg">
                <h5>
                We stay in USA and my daughter has eczema which is not easy to treat.  But medicines that Dr Surbhi Jain gave us did wonders. She hears very patiently and give the best guidance. I would highly recommend their clinic.
                </h5>
                <h1 className="text-xl font-bold my-2">Shafali Goyal</h1>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HomeTestimonials1;
