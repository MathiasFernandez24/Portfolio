import React from 'react'
import styles from './NavBar.module.css'
import ProfilePicture from '../../dataBase/profile-pic.png'
import { IconBrandGithubFilled, IconBrandLinkedin, IconBrandWhatsapp, IconMailForward, IconFileCv } from '@tabler/icons-react';
import iconMobile from '../../dataBase/iconMobile.png'
import iconWeb from '../../dataBase/iconWeb.png'

const NavBar = ({ setIsMobileView }) => {


    return (
        <div className={styles.container}>
            <img src={ProfilePicture} alt="loading..." className={styles.img} />
            <h7 className={styles.textName}>Mathias N. Fernandez</h7>
            <div className={styles.detail}>
                <div className={styles.socialMediaContainer}>
                    <a className={styles.decoration} href="https://github.com/MathiasFernandez24" target={"_blank"}><IconBrandGithubFilled className={styles.socialMediaIcon} /> </a>
                    <a className={styles.decoration} href="https://www.linkedin.com/in/mathias-nicolas-fernandez-figueroa-98450482/" target={"_blank"}><IconBrandLinkedin className={styles.socialMediaIcon} /> </a>
                    <a className={styles.decoration} href="https://wa.me/5402644585409?text=Hola,%20he%20visto%20tu%20Portfolio%20y%20me%20ha%20gustado%20mucho!/" target={"_blank"}><IconBrandWhatsapp className={styles.socialMediaIcon} /> </a>
                    <a className={styles.decoration} href="mailto:mathias_fernandez_24@hotmail.com?Subject=He%20visto%20tu%20Portfolio%20y%20me%20ha%20gustado%20mucho!/" target={"_blank"}><IconMailForward className={styles.socialMediaIcon} /> </a>
                    <a className={styles.decoration} href="https://google.com" target={"_blank"}><IconFileCv className={styles.socialMediaIcon} /> </a>
                </div>
                <div className={styles.mobileWebContainer}>
                    <div>
                        <img className={styles.iconMobile} src={iconMobile} alt="loading.." onClick={() => setIsMobileView(true)} />
                    </div>
                    <div>
                        <img className={styles.iconMobile} src={iconWeb} alt="loading.." onClick={() => setIsMobileView(false)} />
                    </div>
                </div>

                <h2 className={styles.textWebMobile}>Dev Mobile & web</h2>

            </div>
        </div>
    )
}

export default NavBar