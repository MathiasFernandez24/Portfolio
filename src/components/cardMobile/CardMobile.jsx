import React, { useState } from 'react'
import styles from './CardMobile.module.css'
import { IconBrandGithub, IconHome2 } from '@tabler/icons-react'
import 'animate.css';

const CardMobile = ({ project }) => {
    const [isQRView, setIsQRView] = useState(false)
    console.log(isQRView);



    const QrCard = ({ qr, device }) => (
        <div class={styles.qrCard} >

            {device === "android" ?
                <p class={styles.textQR}>Scan with expo app to test on Android</p>
                :
                <p class={styles.textQR}>Scan with expo app to test on Ios</p>
            }
            <img className={styles.qr} src={qr} alt="loaging QR android.." />
        </div>
    )



    return (
        <div class="animate__animated animate__fadeIn">
            <div
                className={styles.container}
                onMouseEnter={() => { setIsQRView(true) }}
                onMouseLeave={() => { setIsQRView(false) }}
            >

                <div class="animate__animated animate__fadeIn animate__slower">
                    {/* {
                        isQRView && */}
                    <div class={styles.qrContainer}>
                        <QrCard qr={project.qr_android} device={"android"} />
                        <QrCard qr={project.qr_ios} device={"ios"} />
                    </div>
                    {/* } */}
                    <img className={styles.video} src={project.video} alt="loaging.." />
                </div>
                <div className={styles.detailContainer}>

                    <div className={styles.detailContainerGit}>
                        <a className={styles.decoration} href={project.repositorio} target={"_blank"}> <IconBrandGithub className={styles.icons} /> </a>
                        {project.date}
                    </div >

                    <div className={styles.title}>
                        <h1>{project.name}</h1>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default CardMobile