import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import styles from '../styles/header.module.css'
import TextElement from '../Elements/TextElement';
import Stack from '@mui/material/Stack';


export default function Header() {
    return (
        <Box sx={{ flexGrow: 1, margin: 2 }} >
            <Grid container spacing={1} className={styles.headerContainer}>
                <Grid item xs={6} md={10}>
                    {/* <p>1</p> */}
                    <Image
                        className="relative "
                        src="/assets/Logo.svg"
                        alt="Logo"
                        width={180}
                        height={37}
                        priority
                    />
                </Grid>
                <Grid item xs={6} md={2}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item >
                            <TextElement text="search" fontSize="14px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />
                        </Grid>
                        <Grid item>

                            <TextElement text="login" fontSize="14px" fontFamily="WebGuyHeadFont" textTranform='uppercase' />
                        </Grid>
                        {/* <Grid item className={styles.menuItem}>
                            <TextElement text="en " />
                            <Image
                                src="/assets/Menu.svg"
                                alt="DownArrow"
                                width={15}
                                height={15}
                                priority
                            />
                        </Grid> */}
                        <Grid item>
                            <Image
                                src="/assets/Menu.svg"
                                alt="DownArrow"
                                width={20}
                                height={20}
                                priority
                            />
                        </Grid>
                    </Grid>

                </Grid>


            </Grid>
        </Box>
    );
}
