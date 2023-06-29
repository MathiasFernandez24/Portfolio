import React from 'react'
import styles from './NavBar.module.css'
import ProfilePicture from '../../dataBase/profile-pic.png'
import { IconBrandGithubFilled, IconBrandLinkedin, IconBrandWhatsapp, IconMailForward, IconFileCv } from '@tabler/icons-react';
import iconMobile from '../../dataBase/iconMobile.png'
import iconWeb from '../../dataBase/iconWeb.png'
import cv from '../../dataBase/cv.pdf'

const NavBar = ({ setIsMobileView, isMobileView }) => {

    return (
        <div className={styles.container}>
            <img src={ProfilePicture} alt="loading..." className={styles.img} />
            <div className={styles.detail}>
                <div>
                    <h2 className={styles.textName}>Mathias N. Fernandez</h2>
                    <h2 className={styles.textSubName}>Frontend developer</h2>
                </div>
                <div className={styles.socialMediaContainer}>
                    <a className={styles.decoration} href="https://github.com/MathiasFernandez24" target={"_blank"}><IconBrandGithubFilled className={styles.socialMediaIcon} /> </a>
                    <a className={styles.decoration} href="https://www.linkedin.com/in/mathias-nicolas-fernandez-figueroa-98450482/" target={"_blank"}><IconBrandLinkedin className={styles.socialMediaIcon} /> </a>
                    <a className={styles.decoration} href="https://wa.me/5402644585409?text=Hola,%20he%20visto%20tu%20Portfolio%20y%20me%20ha%20gustado" target={"_blank"}><IconBrandWhatsapp className={styles.socialMediaIcon} /> </a>
                    <a className={styles.decoration} href="mailto:mathias_fernandez_24@hotmail.com?Subject=He%20visto%20tu%20Portfolio%20y%20me%20ha%20gustado" target={"_blank"}><IconMailForward className={styles.socialMediaIcon} /> </a>
                    <a className={styles.decoration} href={cv} target={"_blank"}  ><IconFileCv className={styles.socialMediaIcon} /> </a>
                </div>
                <div className={styles.mobileWebContainer}>
                    <div className={styles.containerIcon}>
                        <img className={styles.icon} src={iconMobile} alt="loading.." onClick={() => setIsMobileView(true)} />
                        <h2 className={styles.textNameIcon}>Mobile</h2>
                        <div className={isMobileView && styles.iconIndicator} />
                    </div>
                    <div className={styles.containerIcon}>
                        <img className={styles.icon} src={iconWeb} alt="loading.." onClick={() => setIsMobileView(false)} />
                        <h2 className={styles.textNameIcon}>Web</h2>
                        <div className={!isMobileView && styles.iconIndicator} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar