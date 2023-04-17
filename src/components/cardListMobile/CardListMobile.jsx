import React from 'react'
import styles from './CardListMobile.module.css'
import { PROJECTS_MOBILE } from '../../dataBase/PROYECTS'
import CardMobile from '../cardMobile/CardMobile'

const CardListMobile = () => {
    const projectList = PROJECTS_MOBILE
    return (
        <div className={styles.container}>
            {
                projectList.map(project => <CardMobile project={project} key={project.id} />)
            }
        </div>
    )
}

export default CardListMobile