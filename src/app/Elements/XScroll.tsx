
import React, { useEffect, useRef } from 'react';
interface XScrollInterface {
    component: React.ReactNode
}
const containerStyle: React.CSSProperties = {
    width: '100%',
    overflowX: 'auto',
    whiteSpace: 'nowrap',

    padding: '10px',
    position: 'relative'
};

const contentStyle: React.CSSProperties = {
    display: 'inline-block',
};


const itemStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '200px',
    height: '100px',
    marginRight: '10px',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    lineHeight: '100px',
};

const XScroll: React.FC<XScrollInterface> = ({ component }) => {
    // const containerRef = useRef<HTMLDivElement | null>(null);
    // useEffect(() => {
    //     if (containerRef.current) {
    //         const container = containerRef.current;
    //         const gradient = document.createElement('div');

    //         gradient.style.position = 'relative';
    //         gradient.style.top = '0';
    //         gradient.style.left = '0';
    //         gradient.style.width = '100%';
    //         gradient.style.height = '100%';

    //         gradient.style.background = 'radial-gradient(circle, rgba(34,193,195,0) 91%, rgba(34,193,195,1) 95%, rgba(164,133,67,1) 100%)';


    //         container.appendChild(gradient);
    //     }
    // }, []);
    // ref={containerRef}
    return (
        <div style={containerStyle} >
            <div style={contentStyle}>

                {component}

            </div>
        </div >
    );
};

export default XScroll;
