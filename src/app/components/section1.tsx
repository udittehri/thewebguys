import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import styles from '../styles/section1.module.css'
import TextElement from '../Elements/TextElement';
import Stack from '@mui/material/Stack';
import CommonButton from '../Elements/CommonButton';
import SpacerCustom from '../Elements/SpacerCustom';


export default function Section1() {
    return (
        <Box sx={{ flexGrow: 1, margin: 2 }} >
            {/* <p className={styles.mainHeading}>

            </p> */}
            <div>
                <SpacerCustom howMuch={300} />
                <TextElement text="SEE IT ALL" fontSize="15px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={8} md={6}>
                        <TextElement text=" MULTIBEAM SONAR PRODUCTS & SOLUTION " fontSize="70px" fontFamily="WebGuyHeadFont" textTranform='uppercase' /><br />
                        {/* <TextElement text="  " fontSize="60px" /> */}
                    </Grid>
                </Grid>
                <div>
                    {/* <p> */}
                    <SpacerCustom howMuch={300} />

                    <Stack
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-end"
                        spacing={3}
                        className={styles.bottomBar}
                    >
                        <div>
                        </div>
                        <div className={styles.bottomText}>

                            <TextElement text="WASSP multi-beam enables sustainable fishing, exploration, and surveys with versatility and detail." fontSize="15px" fontFamily="WebGuyParaFont" textTranform='none' />
                        </div>

                        <CommonButton text="Contact Us" url="/assets/ArrowRight.svg" />

                    </Stack>

                    {/* </p> */}
                </div>
            </div>
        </Box >
    );
}
