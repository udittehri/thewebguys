
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SpacerCustom from '../Elements/SpacerCustom';
import TextElement from '../Elements/TextElement';
const Section5: React.FC = () => {

    return (
        <Box sx={{}} >
            <SpacerCustom howMuch={150} />
            <Grid container spacing={2}>
                <Grid item md={2}>

                    <TextElement text="04" fontSize="20px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />
                </Grid>
                <Grid item md={3}>
                    <TextElement text="testimonials" fontSize="20px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />
                </Grid>
                <Grid item md={6}>
                    <TextElement text="“WASSP LETS ME GO TO WHERE I WOULD NEVER HAVE FISHED BEFORE, GIVING ME A HIGHER CATCH WITH REDUCED FUEL CONSUMPTION.”" fontSize="70px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />
                    <br />
                    <SpacerCustom howMuch={10} />
                    <TextElement text={`Dominique Faou `} fontSize="20px" fontFamily="norma" textTranform='none' />
                    <br />
                    <TextElement text="Owner/Skipper, France" fontSize="20px" fontFamily="normal" textTranform='none' />


                </Grid>

            </Grid>
            <SpacerCustom howMuch={160} />

        </Box>
    )
}
export default Section5