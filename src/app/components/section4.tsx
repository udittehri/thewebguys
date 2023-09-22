
"use client";

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SpacerCustom from '../Elements/SpacerCustom';
import TextElement from '../Elements/TextElement';
import CustomChip from '../Elements/CustomChip';
import Stack from '@mui/material/Stack';
import styles from '../styles/section4.module.css'
import Image from 'next/image';
import XScroll from '../Elements/XScroll';

const Section4: React.FC = () => {

    interface DataItem {
        id: number;
        title: string;
        about: string
    }
    interface BottomBarDataItem {
        text: string;
        url: string;
    }
    const [data, setData] = useState<DataItem[]>([
        { id: 1, title: 'High Resolution Chirp Sounder', about: "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. " },
        { id: 2, title: '120° side to side coverage ', about: "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. " },
        { id: 3, title: 'Realtime CDX Mapping', about: "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. " },
        { id: 4, title: 'Realtime 3D View CDX', about: "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. " },
        { id: 5, title: 'Backscatter license', about: "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. " },
        { id: 6, title: 'High Resolution Side Scan', about: "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. " },
        { id: 7, title: 'Third-Party Software Integration', about: "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. " },
        { id: 8, title: 'Multiple WASSP Transducers', about: "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. " },
    ]);
    const [selectedData, seSelection] = useState<number>(0)
    const [bottomBarData, setBottomBar] = useState<BottomBarDataItem[]>([
        { text: "SBG SYSTEMS", url: "/assets/SbgSystems.svg" },
        { text: "gpa seabots", url: "/assets/Seabots.svg" },
        { text: "HEMISPHERE", url: "/assets/Hemisphere.svg" },
        { text: "FISHING", url: "/assets/SbgSystems.svg" },
    ])

    const DataComponent = () => {

        return <div>{bottomBarData.map(data => (
            <span className={styles.bottomBarSection}>
                {/* <Grid item xs={0} className={styles.textItem}> */}
                <Grid item xs={0} >
                    <TextElement text={data.text} fontSize="75px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />
                </Grid>
                <Grid item xs={0} className={styles.imageItem}>
                    <Image
                        src={data.url}
                        alt="DownArrow"
                        width={90}
                        height={90}
                        priority
                    />
                </Grid>
            </span>
        ))}</div>;
    };

    return (
        <Box sx={{}} >
            <SpacerCustom howMuch={300} />
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={0} md={2}>
                        <TextElement text="01" fontSize="15px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />

                    </Grid>
                    <Grid item xs={0} md={3}>
                        <TextElement text="Features" fontSize="15px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />
                    </Grid>
                    <Grid item xs={0} md={7}>
                        <Stack>
                            <div>
                                {data.map((item, index) => (
                                    <span>
                                        <CustomChip id={item.id} text={item.title} isSelected={true} />
                                    </span>
                                ))}
                            </div>
                            <SpacerCustom howMuch={10} />
                            <div>
                                <TextElement text={'0' + data[selectedData].id} fontSize="25px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />

                            </div>
                            {/* //TODO add Width 90vh */}
                            <div className={styles.blockwidth}>
                                <TextElement text={data[selectedData].title} fontSize="55px" fontFamily="WebGuyParaFont" textTranform='none' />
                            </div>
                            <div className={styles.blockwidth}>
                                <TextElement text={data[selectedData].about} fontSize="15px" fontFamily="WebGuyParaFont" textTranform='none' />
                            </div>
                        </Stack>

                    </Grid>
                </Grid>

            </div>
            <SpacerCustom howMuch={300} />
            <div className={styles.borderTopBottomScroll}>

                <XScroll component={< DataComponent />} />
            </div>
            <SpacerCustom howMuch={100} />
        </Box >
    );
};

export default Section4;
