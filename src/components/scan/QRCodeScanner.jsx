import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import s from './qrCodeScanner.module.css';

import { SCAN_DATA } from '../../constans';
 
 export const QRCodeScanner = ()  => {
const [scanned, setScanned] = useState(null);

       const scanHandler = (result) => {
        if (!result) return;
       
        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
       
        if (prevData.includes(result.text)) return;

        console.log('result', result);
        setScanned(result.text);

        localStorage.setItem(
            SCAN_DATA, 
            JSON.stringify([...prevData, result.text])
        );
    };
   
    return (
        <div className={s.container}>
            <QrReader
            scanDelay={1000}
            onResult={scanHandler}           
           containerStyle={{ width: '400px'}}
           />
            <p className={s.result}>{scanned}</p>
        </div>
    );
};