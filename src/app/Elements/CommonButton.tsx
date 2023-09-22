import React from 'react';
import styles from './commonButton.module.css'
import Image from 'next/image';

interface CommonButtonProps {
    text: string;
    url: string;
}

// TODO: Parameter for width and height for imgage 
const CommonButton: React.FC<CommonButtonProps> = ({ text, url }) => {

    const buttonContactUs: React.CSSProperties = {
        padding: 10,
        fontFamily: 'WebGuyParaFont'
    };
    const buttonBorder: React.CSSProperties = {
        color: '#fff',
        border: '1px solid #fff',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        paddingRight: 10,
        width: 'fit-content',
        marginTop: 5,
        paddingInline: 20

    }
    const bottomBar: React.CSSProperties = {
        marginBottom: 50
    }

    return <div style={buttonBorder}>
        <span style={buttonContactUs} >
            {text}
        </span>
        <span>
            <Image
                src={url}
                alt="DownArrow"
                width={24}
                height={24}
                priority
            />
        </span>

    </div>;
};

export default CommonButton;