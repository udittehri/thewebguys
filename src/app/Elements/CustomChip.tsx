import React from 'react';
// import styles from '../styles/header.module.css'

interface CustomChipProps {
    text: string;
    id: number;
    isSelected: Boolean;
}



const CustomChip: React.FC<CustomChipProps> = ({ id, text, isSelected = true }) => {
    // let value = ' textTranform ? textTranform : '
    const textStyle: React.CSSProperties = {
        // color: '#fff',
        border: '1px solid #fff',
        padding: '10px',
        borderRadius: '20px',
        margin: '10px',
        display: 'inline-block',
        paddingInline: '3vh',
        //Remove this and change to onclick instead
        backgroundColor: '#fff',
        color: '#051f30',
    };
    const numberStyle: React.CSSProperties = {
        fontFamily: 'WebGuyHeadFont'
    }
    const selectedChipStyle: React.CSSProperties = {
        backgroundColor: '#fff',
        color: '#051f30',
    }


    // return <span style={isSelected ? `${selectedChipStyle} ${textStyle}` : textStyle}>
    return <span style={textStyle}>
        <span style={numberStyle}>{id > 9 ? id : '0' + id}</span><span > {text}</span>
    </span>;
};

export default CustomChip;