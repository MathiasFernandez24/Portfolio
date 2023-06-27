import React from 'react'
import styles from './CardWeb.module.css'
import { IconBrandGithub, IconHome2 } from '@tabler/icons-react';
import 'animate.css';

const Card = ({ project }) => {
    return (
        <div class="animate__animated animate__fadeIn ">
            <div className={styles.container}>
                <a className={styles.containerImage} href={project.page} target={"_blank"}>
                    {/* <div class="animate__animated animate__fadeIn animate__slower"> */}
                    <img className={styles.video} src={project.video} alt="loaging.." />
                </a>
                <div className={styles.detailContainer}>
                    <div className={styles.containerNameAndGit}>
                        <a className={styles.decoration} href={project.repositorio} target={"_blank"}> <IconBrandGithub className={styles.icons} stroke={3} /> </a>
                        <h3 className={styles.nameAndDate}>{project.name}</h3>
                    </div>
                    {/* <a className={styles.decoration} href={project.page} target={"_blank"}>  <IconHome2 className={project.page ? styles.icons : styles.iconsDisabled} /> </a> */}
                    <h3 className={styles.nameAndDate}>{project.date}</h3>
                </div>
            </div>
        </div >
    )
}

export default Card