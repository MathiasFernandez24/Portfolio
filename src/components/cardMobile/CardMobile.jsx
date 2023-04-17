import React from 'react'
import styles from './CardMobile.module.css'
import { IconBrandGithub, IconHome2 } from '@tabler/icons-react'

const CardMobile = ({ project }) => {
    return (
        <div className={styles.container}>
            <img className={styles.video} src={project.video} alt="loaging.." />
            <div className={styles.detailContainer}>
                <a className={styles.decoration} href={project.repositorio} target={"_blank"}> <IconBrandGithub className={styles.icons} /> </a>
                <div className={styles.detailContainerText}>
                    <p>{project.name}</p>
                    <p>{project.date}</p>
                </div>
                <a className={styles.decoration} href={project.page} target={"_blank"}>  <IconHome2 className={project.page ? styles.icons : styles.iconsDisabled} /> </a>
            </div>
        </div>
    )
}

export default CardMobile