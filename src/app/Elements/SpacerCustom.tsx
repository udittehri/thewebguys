import React from 'react';
// import styles from '../styles/header.module.css'

interface SpacerCustomProps {
    howMuch: number // How Much Space 
}


const SpacerCustom: React.FC<SpacerCustomProps> = ({ howMuch = 20 }) => {
    const space: React.CSSProperties = {

        marginTop: howMuch

    };

    return <div style={space}>
    </div>
};

export default SpacerCustom;