import React from 'react'
import styles from './CardListWeb.module.css'
import CardWeb from '../cardWeb/CardWeb'
import { PROJECTS_WEB } from '../../dataBase/PROYECTS'

const CardListWeb = () => {

    const projectList = PROJECTS_WEB
    return (
        <div className={styles.container}>
            {
                projectList.map(project => <CardWeb project={project} key={project.id} />)
            }
        </div>
    )
}

export default CardListWeb