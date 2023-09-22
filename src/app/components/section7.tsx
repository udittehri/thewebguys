import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SpacerCustom from '../Elements/SpacerCustom';
import TextElement from '../Elements/TextElement';
import styles from './../styles/section7.module.css'
import commonstyle from './../styles/common.module.css'
import XScroll from '../Elements/XScroll';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import CommonButton from '../Elements/CommonButton';

const Section7: React.FC = () => {
    interface BottomBarLinksParameter {
        lists: string[];
    }

    const link = ['Home', 'Products', 'About ENL', 'Multibeam Technology', 'News', 'Resources', 'Contact']
    const social = ['Facebook', 'Instagram', 'Youtube']
    const offices = ['Offices', 'Auckland-NZs', 'Essex-UK']

    const BottomBarLinks: React.FC<BottomBarLinksParameter> = ({ lists }) => {
        return (
            <div>
                {lists.map((edx) => (
                    <p className={styles.BottomLinkText}>
                        {edx}
                    </p>
                ))}
            </div>
        )
    }
    return (
        <Box className={commonstyle.commonMargin}>
            <SpacerCustom howMuch={100} />

            <Grid container spacing={2} >
                <Grid item md={1}>
                </Grid>
                <Grid item md={3}>
                    <Stack >
                        <TextElement text="Dui duis facilisis id et ullamcorper diam est. Vulputate ac magna in id." fontSize="20px" fontFamily="WebGuyParaFont" textTranform='none' />
                        <SpacerCustom howMuch={40} />
                        <CommonButton text="Contact" url="/assets/ArrowRight.svg" />
                        <SpacerCustom howMuch={80} />
                        <p className={styles.subscribeText}>
                            Subscribe to our newsletter
                        </p>
                    </Stack>

                </Grid>
                <Grid item md={4}>
                    {/* <TextElement text="Latest News" fontSize="20px" fontFamily="WebGuyHeadFont" textTranform='uppercase' /> */}
                </Grid>
                <Grid item md={2}>
                    {<BottomBarLinks lists={link} />}
                    <SpacerCustom howMuch={20} />
                    {<BottomBarLinks lists={social} />}

                </Grid>
                <Grid item md={2} className={styles.special}>
                    {<BottomBarLinks lists={offices} />}
                    {<BottomBarLinks lists={['@2023 WASSP']} />}
                </Grid>
            </Grid>
            <SpacerCustom howMuch={100} />
            <Image
                src={'/assets/WasspMultibeam.svg'}
                alt="DownArrow"
                width={1840}
                height={840}
                priority
                color='green'
                className={styles.footerImageBig}
            />
            <SpacerCustom howMuch={100} />
        </Box >
    )
}

export default Section7