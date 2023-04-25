import React from 'react'
import styles from './CardWeb.module.css'
import { IconBrandGithub, IconHome2 } from '@tabler/icons-react';
import 'animate.css';

const Card = ({ project }) => {
    return (
        <div class="animate__animated animate__fadeIn ">
            <div className={styles.container}>
                <div class="animate__animated animate__fadeIn animate__slower">
                    <img className={styles.video} src={project.video} alt="loaging.." />
                </div>
                <div className={styles.detailContainer}>
                    <a className={styles.decoration} href={project.repositorio} target={"_blank"}> <IconBrandGithub className={styles.icons} /> </a>
                    <a className={styles.decoration} href={project.page} target={"_blank"}>  <IconHome2 className={project.page ? styles.icons : styles.iconsDisabled} /> </a>
                    <h3>{project.name}</h3>
                    <h3>{project.date}</h3>
                </div>
            </div >
        </div >
    )
}

export default Card