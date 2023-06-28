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
                {/* <a href="exp://u.expo.dev/update/0f6b3ae8-735b-4d1f-b445-85eec76a75ce" target={"_blank"}> */}
                <img className={styles.qr} src={qr} alt="loaging QR android.." />
                {/* </a> */}
            </div>
        </div>
    )




    return (
        <div class="animate__animated animate__fadeIn">
            <div className={styles.container}>
                {/* <div> */}

                <div
                    className={styles.containerScreen}
                    onMouseEnter={() => { setisQRsView(true) }}
                    onMouseLeave={() => { setisQRsView(false) }}
                >

                    {/* <div class="animate__animated animate__fadeIn animate__slower"> */}


                    <img className={styles.video} src={project.video} alt="loaging.." />
                    <div class={styles.qrsContainer}>
                        <QrCard qr={project.qr_android} device={"android"} />
                        <QrCard qr={project.qr_ios} device={"ios"} />
                    </div>
                    {/* </div> */}
                </div>
                {/* </div> */}
                <div className={styles.detailContainer}>

                    <div className={styles.detailContainerGit}>
                        <a className={styles.decoration} href={project.repositorio} target={"_blank"}>
                            <IconBrandGithub className={styles.icons} stroke={2.5} />
                        </a>
                        {project.date}
                    </div >

                    {/* <div > */}
                    <h1 className={styles.title}>{project.name}</h1>
                    {/* </div>} */}

                </div>
            </div>
        </div>

    )
}

export default CardMobile