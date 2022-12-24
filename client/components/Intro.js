import React from 'react'
import Image from 'next/image'
import styles from '../styles/Intro.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Intro = () => {
    const router=useRouter()
    const urlChange = (url) => {
      router.push(url)
    }
  return (
    <section className={styles.intro}>
        <div className='container'>
            <div className={styles.intro_text}>
                <div className={styles.title}>
                    <h1>Ish-bor.uz</h1>
                    <span>O'zbekiston bo'ylab ish va ishchi qidiring</span>
                    <div className={styles.row}>
                        <div onClick={()=>urlChange('/ishchi')}>
                            <Link href={"/ishchi"}>
                                <a>
                                    <Image width={90} height={90} src={"https://it-market.uz/static/itpp/img/for_customers_icon.png"}/>
                                    <h6>Ishchi qidirish</h6>
                                    <p>Vakansiyaga mos ishchi uchun e'lon bering </p>
                                </a>
                            </Link>
                        </div>
                        <div onClick={()=>urlChange('/ishchilar')}>
                            <Link href={'/ishchilar'}>
                                <a>
                                    <Image width={90} height={90} src={"https://it-market.uz/static/itpp/img/for_residents_icon.png"}/>
                                    <h6>Ishchilar</h6>
                                    <p>Mavjud ishchilarni koring</p>
                                </a>
                            </Link>
                        </div>
                        <div onClick={()=>urlChange('/ish')}>
                            <Link href={'/ish'}>
                                <a>
                                    <Image width={90} height={90} src={"https://it-market.uz/static/itpp/img/for_contractors_icon.png"}/>
                                    <h6>Ish qidirish</h6>
                                    <p>O'zingiz uchun mos ish uchun e'lon bering</p>
                                </a>
                            </Link>
                        </div>
                        <div onClick={()=>urlChange('/ishlar')}>
                            <Link href={'/ishlar'}>
                                <a>
                                    <Image width={90} height={90} src={"https://it-market.uz/static/itpp/img/for_professionals_icon.png"} />
                                    <h6>Ishlar</h6>
                                    <p>Mavjdu ishlarni ko'ring</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Intro
