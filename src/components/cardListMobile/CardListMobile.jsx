import React from 'react'
import styles from './CardListMobile.module.css'
import { PROJECTS_MOBILE } from '../../dataBase/PROYECTS'
import CardMobile from '../cardMobile/CardMobile'

const CardListMobile = () => {
    const projectList = PROJECTS_MOBILE
    return (
        <div className={styles.container}>
            <h1 className={styles.textInstruccion}>
                <span className={styles.spanSlash}>Step 1 </span>
                download the Expo-App on your phone
                <span className={styles.spanSlash}> Step 2 </span>
                scan the QR
                <span className={styles.spanSlash}> Step 3 </span>
                test any app</h1>
            <div className={styles.containerDevices}>
                {
                    projectList.map(project => <CardMobile project={project} key={project.id} />)
                }
            </div>
        </div>
    )
}

export default CardListMobile