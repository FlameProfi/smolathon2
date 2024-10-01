import React from "react";
import './assets/style.scss'
import QRCode from 'react-qr-code';


const QrModal= ({active, setActive} : {active: any, setActive: any}) => {





    return (
        <div className={active ? "qr_modal active" : "qr_modal"} onClick={() => setActive(false)}>
            <div className={active ? "qr_modal__content active" : "qr_modal__content"} onClick={e => e.stopPropagation()}>
                    <p style={{marginBottom: "10px"}}>QR для оплаты сгенерирован</p>
                    <QRCode
                        value="100"
                        size={200}
                        fgColor="red"
                    /> 
                    <p style={{marginTop: "10px"}}>Для закрытия окна нажмите на пустое место</p>
            </div>
        </div>
    )

};
export default QrModal;