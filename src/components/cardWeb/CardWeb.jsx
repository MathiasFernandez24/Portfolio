import React from 'react'
import styles from './CardWeb.module.css'
import { IconBrandGithub, } from '@tabler/icons-react';
import 'animate.css';

const Card = ({ project }) => {

    return (
        <div class="animate__animated animate__fadeIn ">
            <div className={styles.container}>
                <a className={styles.containerImage} href={project.page} target={"_blank"}>
                    <img className={styles.video} src={project.video} alt="loaging.." />
                </a>
                <div className={styles.detailContainer}>
                    <div className={styles.containerNameAndGit}>
                        <a className={styles.decoration} href={project.repositorio} target={"_blank"}>
                            <IconBrandGithub className={styles.icons} stroke={2.5} />
                        </a>
                        <h3 className={styles.name}>{project.name}</h3>
                    </div>
                    <h3 className={styles.date}>{project.date}</h3>
                </div>
            </div>
        </div >
    )
}

export default Card