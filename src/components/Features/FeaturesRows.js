import React from 'react'
import FeatureRow from './FeatureRow'
function FeaturesRow() {
    return (
        <div>
            <FeatureRow
                src='/images/rkjain.png'
                mainheading='Dr. R.K.Jain'
                maintext='M.D. (Hom.) Registration no. : BHSD/1525'
                headPri='Recipient of'
                textPri='LIFE TIME ACHIEVEMENT AWARD'
                headSec="Qualification"
                textSec='D.H.M.S (Hons.) (New Delhi), P.G.C.R. (Mumbai),

M.D. (Hom.) (Jaipur)'
                headTer='Distinction'
                textTer='Hons. In Organon- Secured more than 75% marks in the
subject of Organon (Homeopathic Philosophy and Principles) hence was awarded D.H.M.S (Hons.)'
                headQuat='Experience'
                textQuat='1) 42 years – Have successfully treated all types of Acute & Chronic Diseases.  
2) Have worked for 6 years (May 1990-April 1996) in Holy Family Hospital, Okhla Road, New Delhi.                
3) Have worked as Resident H. Physician / Surgeon in Nehru Homeopathic Medical College & Hospital, New Delhi.Road, New Delhi.'
                feature1='/images/features/feature-icon-1.png'
                feature2='/images/features/feature-icon-2.png'
                feature3='/images/features/feature-icon-3.png'
                feature4='/images/features/feature-icon-4.png'
            />
           

            


            <FeatureRow
                first={true}
                src='/images/saurabh.png'
                mainheading='Dr. Saurabh Kumar Jain'
                maintext='B.H.M.S.(DU), M.D.(Hom.)(HU)'
                headPri='Accomplishments'
                textPri='1) PGET 1st rank holder (2011) at Homoeopathy University, Jaipur.
                2) PGET 4th rank holder (2011) at Delhi University, New Delhi.
                3) Good Academic Record.
                4) M.D. Dissertation: Clinical Verification of 3 Lesser Known Homoeopathic Medicines in the Management of Hyperglycaemia in Relation to Diabetes Mellitus.
                '
                headSec="Qualification"
                textSec='B.H.M.S.(DU), M.D.(Hom.)(HU), CCHM, BCCFR'
                headTer='Publications'
                textTer='1) Standard Treatment Guidelines in Homoeopathy, Volume 3
                2) Research Highlights
                3) Utility of Phatak’s Repertory in Acute Cases: An Open Observational Clinical Trial
                '
                headQuat='Experience'
                textQuat='12 + years of Clinical experience.
                7 + years experience of working in Government sector.
                '
                feature1='/images/features/feature-icon-1.png'
                feature2='/images/features/feature-icon-2.png'
                feature3='/images/features/feature-icon-3.png'
                feature4='/images/features/feature-icon-4.png'
            />

            <FeatureRow
               
                src='/images/surbhi.png'
                mainheading='Dr. Surbhi Jain'
                maintext='B.H.M.S.(DU),M.D. (Hom.)(HU)'
                headPri='Research Associate (Homoeopathy), CCRH'
                textPri='Homeopathic research associate in CCRH'
                headSec="Qualification"
                textSec='B.H.M.S.(DU), M.D.(Hom.)(HU), CCHM'
                headTer='Publications'
                textTer='1) Standard Treatment Guidelines in Homoeopathy, Volume 3
                2) Research Highlights
                3) Utility of Phatak’s Repertory in Acute Cases: An Open Observational Clinical Trial
                '
                headQuat='Experience'
                textQuat='7 years (approx.) Research experience at CCRH.
                12 years (approx.) Clinical experience.
                '
                feature1='/images/features/feature-icon-1.png'
                feature2='/images/features/feature-icon-2.png'
                feature3='/images/features/feature-icon-3.png'
                feature4='/images/features/feature-icon-4.png'

            />

            
            

            
            
        </div>
    )
}

export default FeaturesRow
