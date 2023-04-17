import React from 'react'
import styles from './Card.module.css'
import { IconBrandGithub, IconBrandGithubFilled, IconAppWindowFilled, IconHome2 } from '@tabler/icons-react';

const Card = ({ project }) => {
    return (
        <div className={styles.container}>
            <img className={styles.video} src={project.video} alt="loaging.." />
            <div className={styles.detailContainer}>
                <IconBrandGithub className={styles.icons} />
                {/* <IconAppWindowFilled className={styles.icons} /> */}
                <IconHome2 className={styles.icons} />
            </div>
        </div >
    )
}

export default Card