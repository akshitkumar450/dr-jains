import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        fontFamily: "Helvetica"
    },
    heading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function SimpleAccordion() {
    const classes = useStyles();

    return (
        <>
            <h1 className='text-center px-2 lg:px-0  mb-10 text-4xl font-bold mt-4' style={{ color: '#186FC5' }} >Frequently questions</h1>

            <div className={`${classes.root}  px-2 mb-10 lg:px-0  lg:space-x-4 `}
            >
                {/**left columns */}
                <div className='space-y-4 w-1/2 mx-auto'>
                    <Accordion >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography
                                className={`${classes.heading} text-[#424348]`}>How is Homeopathy Different from other systems of Medicine?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                className='text-[#424348]'
                            >
                                Homoeopathy is a holistic medicine and treats the person as a whole. It not only works on the superficial diseases but also believes in treating the root cause of disease. It also helps to boost up the immunity of the patient.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={`${classes.heading} text-[#424348]`}> Do Homeopathic medicines produce side effects?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                className='text-[#424348]'
                            >
                                Homoeopathic medicines are natural, gentle in action and hence completely safe. They do not cause any side effects and are non addictive. Thus are safe for all age groups from babies to children to young people to elderly.

                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={`${classes.heading} text-[#424348]`}>Does Homeopathy give relief slowly?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                className='text-[#424348]'
                            >
                                The result of the medicine depends on whether the disease is acute or chronic. Acute diseases respond to treatment in a very short time. The time taken for treating a chronic disease depends upon various factors like severity, complexity, duration and suppression of the disease, etc.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    

                    
                </div>
            </div>
        </>
    );
}
