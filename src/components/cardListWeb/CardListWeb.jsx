import React, { useState } from 'react'
import styles from './CardListWeb.module.css'
import Card from '../card/Card'
import { PROYECTS } from '../../dataBase/PROYECTS'

const CardListWeb = () => {
    const [projectList, setProjectList] = useState(PROYECTS)
    return (
        <div className={styles.container}>
            {
                projectList.map(project => <Card project={project} key={project.id} />)
            }
        </div>
    )
}

export default CardListWeb