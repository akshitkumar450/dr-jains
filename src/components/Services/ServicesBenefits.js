import React from 'react'
import ServicesFeature from './ServicesFeature'
function ServicesBenefits() {
    return (
        <div className='px-2 max-w-6xl mx-auto lg:px-0 lg:grid  grid-cols-2 space-y-5 lg:space-y-0 gap-5 mt-10 mb-24'>
            <ServicesFeature
                url={'/test'}
                benefits={true}
                heading='MIND CLINIC'
                text='We excel in treating Anxiety, Depression etc. by Holistic, non-habit forming, Homeo-Unique treatment free from side effects.'
            />
            <ServicesFeature
                benefits={true}
                url={'/refund-policy'}
                heading='THYROID & LIFESTYLE DISORDER CLINIC'
                text='Individualized patient centric Homeo-Unique treatment for Hypothyroidism, Diabetes, Hypertension, Obesity etc with quick and lasting results'
            />
            <ServicesFeature
                benefits={true}
                url={'/privacy-policy'}
                heading='STONE & KIDNEY CLINIC'
                text='We stand out in providing effective, safe, non-surgical solutions for treating kidney stones and other kidney disorders.'
            />
            <ServicesFeature
                benefits={true}
                heading='INFERTILITY, PCOS & GYNAE CLINIC'
                text="Our vast experience boasts of numerous successfully treated cases of infertility, PCOS and other gynaecological disorders."
            />
            <ServicesFeature
                benefits={true}
                heading='SKIN & HAIR CLINIC'
                text='Be it Acne, Alopecia, Psoriasis or Eczema, our Homeo-Unique treatment provides best solutions for skin and hair problems by targeting underlying causes.'
            />
            <ServicesFeature
                benefits={true}
                heading='CHILD IMMUNITY CLINIC'
                text='Homeo-Unique treatment stimulates the body’s innate healing abilities, empowering children to develop robust immunity.'
            />
            <ServicesFeature
                benefits={true}
                heading='CANCER & OLD AGE CLINIC'
                text='With our expertise, experience & Homeo-Unique treatment we address the complexities of aging and cancer for a balanced and meaningful life.'
            />
            <ServicesFeature
                benefits={true}
                heading='PILES, LIVER, STOMACH & GI CLINIC'
                text='Safe, sure solutions for Piles, Fatty Liver, Indigestion and numerous GI problems with our Homeo-Unique treatment.'
            />
            <ServicesFeature
                benefits={true}
                heading='ALLERGY, RESPIRATORY CLINIC'
                text='With root cause center Homeo-Unique treatment we excel in successfully treating allergies and a wide array of respiratory disorders.'
            />
            <ServicesFeature
                benefits={true}
                heading='NEURO & JOINT PAIN CLINIC'
                text='Superiority of Homeo-Unique treatment lies in addressing underlying imbalances and triggers for long-term relief, rather than just masking symptoms.'
            />
        </div>
    )
}

export default ServicesBenefits
