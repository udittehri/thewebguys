import Image from 'next/image'
import { Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Header from './components/header'
import styles from './styles/common.module.css'
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';
import Section6 from './components/section6';
import Section7 from './components/section7';
export default function Home() {
  return (
    <Box sx={{ width: '100%', background: '#051f31', overflow: 'hidden' }}>
      <Stack spacing={0}>
        <div className={styles.customBackground1}>
          <Header />
          <Section1 />
        </div>
        <div className={styles.customBackground2}>
          <Section2 />
        </div>
        <div className={styles.customBackground3}>
          <Section3 />
        </div>
        <div className={styles.customBackground4}>
          <Section4 />
        </div>
        <div className={styles.customBackground5}>
          <Section5 />
        </div>
        <div className={styles.customBackground6}>
          <Section6 />
        </div>
        <div className={styles.customBackground6}>
          <Section7 />
        </div>

      </Stack>
    </Box>


  )
}
