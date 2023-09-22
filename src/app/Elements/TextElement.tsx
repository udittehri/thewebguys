import React from 'react';
// import styles from '../styles/header.module.css'

interface TextElementProps {
    text: string;
    fontSize: string;
    fontFamily: string;
    textTranform: string;
}



const TextElement: React.FC<TextElementProps> = ({ text, fontSize, fontFamily, textTranform = 'none' }) => {
    // let value = ' textTranform ? textTranform : '
    const textStyle: React.CSSProperties = {
        textTransform: textTranform == 'none' ? 'none' : 'uppercase',
        fontSize: fontSize,
        color: '#fff',
        fontFamily: fontFamily

    };

    return <span style={textStyle}>{text}</span>;
};

export default TextElement;