import React from 'react'
import styles from './CardMobile.module.css'
import { IconBrandGithub, IconHome2 } from '@tabler/icons-react'
import 'animate.css';

const CardMobile = ({ project }) => {
    return (
        <div class="animate__animated animate__fadeIn">
            <div className={styles.container}>
                <img className={styles.video} src={project.video} alt="loaging.." />
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