import React from 'react'
import styles from './CardListMobile.module.css'
import { PROJECTS_MOBILE } from '../../dataBase/PROYECTS'
import CardMobile from '../cardMobile/CardMobile'
import { IconBrandApple, IconBrandAndroid } from '@tabler/icons-react';

const CardListMobile = () => {
    const projectList = PROJECTS_MOBILE

    const Arrow = () => (
        <div className={styles.arrowContainer}>
            <div className={styles.arrow}></div>
        </div>
    )

    return (
        <div className={styles.container}>
            <div className={styles.containerInstruccion}>
                <h1 className={styles.textTitle}>Download Expo Go App</h1>
                <div className={styles.buttonsContainer}>
                    <a className={styles.buttonContainer} href='https://play.google.com/store/apps/details?id=host.exp.exponent' target={"_blank"}>
                        <IconBrandAndroid stroke={2.5} className={styles.iconButton} />
                    </a>
                    <a className={styles.buttonContainer} href='https://apps.apple.com/ar/app/expo-go/id982107779' target={"_blank"}>
                        <IconBrandApple stroke={2.5} className={styles.iconButton} />
                    </a>
                </div>
                <h1 className={styles.textTitle}>Scan a QR Code to test it</h1>
                <Arrow />
            </div>
            <div className={styles.containerDevices}>
                {
                    projectList.map(project => <CardMobile project={project} key={project.id} />)
                }
            </div>
        </div>
    )
}

export default CardListMobile