import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className='container'>
            <div className={styles.row}>
                <div>
                    <h4>
                        <a>
                            ish-bor.uz
                        </a>
                    </h4>
                    <p>Ishchi qidirish biz bilan juda ham oson va Ish qidirish biz bilan samarali!</p>
                </div>
                <div>
                    <h6>Menu</h6>
                    <ul>
                        <li>
                            <a>Biz haqimizda</a>
                        </li>
                        <li>
                            <a>Xizmatlarimiz</a>
                        </li>
                        <li>
                            <a>Aloqa</a>
                        </li>
                        <li>
                            <a>Saytni shartlari</a>
                        </li>
                        <li>
                            <a>Reklama</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h6>Havolalar</h6>
                    <ul>
                        <li>
                            <a>Ishchi qidirish</a>
                        </li>
                        <li>
                            <a>Ishchilar</a>
                        </li>
                        <li>
                            <a>Ish qidirish</a>
                        </li>
                        <li>
                            <a>Ishlar</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h6>Bizga qo'shiling</h6>
                    <ul>
                        <li>
                            <a>
                                <Image width={30} height={30} objectFit='contain' src={"https://ish-bor.uz/img/facebook.svg"}/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Image width={30} height={30} objectFit='contain' src={"https://ish-bor.uz/img/telegram.svg"}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer