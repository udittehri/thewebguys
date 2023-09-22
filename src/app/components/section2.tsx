// import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import styles from './../styles/section2.module.css'
import TextElement from '../Elements/TextElement';
import CommonButton from '../Elements/CommonButton';
import SpacerCustom from '../Elements/SpacerCustom';

import Grid from '@mui/material/Grid';

export default function Section2() {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <Stack>
                <SpacerCustom howMuch={200} />
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={0} md={4}>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextElement text="welcome to the world of wassp multibeam " fontSize="70px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={0} md={4}>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Grid container spacing={2}>
                                <Grid item xs={0} md={2}>
                                    <TextElement text="01" fontSize="15px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />
                                </Grid>
                                <Grid item xs={0} md={4}>
                                    <TextElement text="About wassp" fontSize="15px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <TextElement text="WASSP, a powerful multi-beam sounder with 120-degree coverage and models for deep exploration, offers unparalleled accuracy, detail, and versatility. Target fish with steerable sounders, generate real-time 3D charts, map fish in water, and make better decisions with the user-friendly advanced mode." fontSize="15px" fontFamily="WebGuyParaFont" textTranform='none' />
                                    <SpacerCustom howMuch={20} />
                                    <CommonButton text="Our Story" url="/assets/ArrowRight.svg" />
                                </Grid>
                            </Grid>
                            {/* <TextElement text="welcome to the world of wassp multibeam " fontSize="70px" /> */}
                        </Grid>
                    </Grid>
                </div>
                <SpacerCustom howMuch={200} />


            </Stack>

        </Box>

    )
}