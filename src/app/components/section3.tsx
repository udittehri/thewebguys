import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextElement from '../Elements/TextElement';
import Image from 'next/image';
import styles from './../styles/section3.module.css'
import Commonstyles from './../styles/common.module.css'
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import SpacerCustom from '../Elements/SpacerCustom';

export default function Section3() {
    return (
        <Box sx={{}} >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
                spacing={2}
                marginLeft={5}
                marginRight={5}
                height='100vh'
            >
                <div>
                    <Stack>

                        <Grid container spacing={1}>
                            <Grid item xs={0} md={1}>
                                <TextElement text="01" fontSize="15px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />
                            </Grid>

                            <Grid item xs={12} md={7} className={styles.progressbar}>
                                <LinearProgress variant="determinate" value={40} />
                            </Grid>

                            <Grid item xs={0} md={1}>

                                <TextElement text="03" fontSize="15px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />
                            </Grid>
                        </Grid>
                        <TextElement text="(FISHING SERIES)" fontSize="15px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />
                        <TextElement text="f - series" fontSize="85px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />
                    </Stack>
                </div>
                <div className={styles.rightBoxWidth}>
                    <Stack>
                        <TextElement text="F - SERIES" fontSize="18px" fontFamily="WebGuyParaFont" textTranform='uppercase' />
                        <TextElement text="WASSP Multibeam finds fish and habitat over a wider area than single-beam systems." fontSize="15px" fontFamily="WebGuyParaFont" textTranform='none' />
                        <SpacerCustom howMuch={10} />
                        {/* <p className={Commonstyles.underLine}> */}
                        <TextElement text="Explore Now" fontSize="15px" fontFamily="WebGuyParaFont" textTranform='none' />
                        {/* </p> */}
                    </Stack>

                </div>

            </Stack>
        </Box >
    )
}