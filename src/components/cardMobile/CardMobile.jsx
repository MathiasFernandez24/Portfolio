import React, { useState } from 'react'
import styles from './CardMobile.module.css'
import { IconBrandGithub } from '@tabler/icons-react'
import 'animate.css';
import qr_example from '../../dataBase/preview-mobile-proyects/QR_muestra_no_scan.jpg'

const CardMobile = ({ project }) => {
    const [isQRsView, setisQRsView] = useState(false)
    console.log(isQRsView);



    const QrCard = ({ qr, device }) => (
        <div class={styles.qrCard} >

            {device === "android" ?
                <p class={styles.textQR}>Android</p>
                :
                <p class={styles.textQR}>Ios</p>
            }
            <div class={styles.qrContainSinlge}>
                <img className={styles.qrNoScan} src={qr_example} alt="loaging QR android.." />
                <img className={styles.qr} src={qr} alt="loaging QR android.." />
            </div>
        </div>
    )




    return (
        <div class="animate__animated animate__fadeIn">
            <div
                className={styles.container}
                onMouseEnter={() => { setisQRsView(true) }}
                onMouseLeave={() => { setisQRsView(false) }}
            >

                <div class="animate__animated animate__fadeIn animate__slower">
                    {/* {
                        isQRsView && */}
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