import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SpacerCustom from '../Elements/SpacerCustom';
import TextElement from '../Elements/TextElement';
import styles from './../styles/section6.module.css'
import XScroll from '../Elements/XScroll';
import Image from 'next/image';
import Stack from '@mui/material/Stack';

const Section6: React.FC = () => {
    interface newsDataType {
        text: string;
        url: string;
    }

    const newsData: newsDataType[] = [
        { text: "South Pacific reopens for superyachts, a top charter spot.", url: "/assets/03.jpg" },
        { text: "WASSP’s Bluebeam brings major feature advancements", url: "/assets/04.jpg" },
        { text: "South Pacific reopens for superyachts, a top charter spot.", url: "/assets/03.jpg" },
        { text: "WASSP’s Bluebeam brings major feature advancements", url: "/assets/04.jpg" },
    ]

    const NewsComponent = () => {

        return <div>
            {newsData.map(data => (
                <div className={styles.newsStand}>
                    <Stack direction="column"
                        justifyContent="space-evenly"
                        // alignItems="stretch"
                        spacing={0.5}
                    >
                        <div>
                            <Image
                                src={data.url}
                                alt="DownArrow"
                                width={450}
                                height={450}
                            />
                        </div>
                        <div style={{ width: '100%' }} >
                            <TextElement text={data.text} fontSize="20px" fontFamily="WebGuyParaFont" textTranform='none' />

                        </div>
                        <SpacerCustom howMuch={20} />
                        <div style={{ width: '100%' }} >
                            <span className={styles.actionBar}>
                                <TextElement text="View" fontSize="15px" fontFamily="WebGuyParaFont" textTranform='none' />
                                <Image
                                    src="/assets/ArrowRight.svg"
                                    alt="DownArrow"
                                    width={30}
                                    height={30}
                                />
                            </span>


                        </div>
                    </Stack>
                </div >
            ))}</div >;
    };
    const ScrollingImageComponent = () => {
        //Image Data set from 04to 14
        let imageData = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        return (
            <div>
                {imageData.map((imageNumber) => (
                    <div className={styles.ScrollingImageContainer}>
                        {/* <div className={styles.blur} style={{ backgroundImage: "/assests/06.jpg" }}></div> */}
                        <Image
                            src={imageNumber > 9 ? `/assets/${imageNumber}.jpg` : `/assets/0${imageNumber}.jpg`}
                            alt="DownArrow"
                            width={200}
                            height={200}
                        />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <Box>
            <SpacerCustom howMuch={150} />
            <Grid container spacing={2}>
                <Grid item md={2}>

                    <TextElement text="05" fontSize="20px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />
                </Grid>
                <Grid item md={3}>
                    <TextElement text="Latest News" fontSize="20px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />
                </Grid>
                <Grid item md={6}>
                    <XScroll component={< NewsComponent />} />
                </Grid>

            </Grid>
            <SpacerCustom howMuch={160} />

            <XScroll component={< ScrollingImageComponent />} />
        </Box>
    )
}
export default Section6;