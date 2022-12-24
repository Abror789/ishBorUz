import React from 'react'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { useRouter } from "next/router";


const Header = () => {
  const router = useRouter();
  return (
    <section className={styles.header}>
       <div className='container'>
         <div className={styles.header_main}>
           <div className={styles.header_left}>
              <Link href={"/"}>
                <a href='#'>
                  <Image height={70} width={200} objectFit='contain' src={"https://ish-bor.uz/ish-bor_uz_logos.png"}/>
                </a>
              </Link>
            </div>
            <div className={styles.header_right}>
              <ul>
                <li className={router.pathname=='/ishchi'? `${styles.active}` : ""}>
                  <Link href={"/ishchi"}>
                    <a>
                      Ishchi qidirish
                    </a>
                  </Link>
                </li>
                <li className={router.pathname.includes('ishchilar') ? `${styles.active}` : ""}>
                  <Link href={"/ishchilar"}>
                      <a>Ishchilar</a>
                  </Link>
                </li>
                <li className={router.pathname == "/ish" ? `${styles.active}` : ""}>
                  <Link href={"/ish"}>
                      <a>Ish qidirish</a>
                  </Link>
                </li>
                <li className={router.pathname.includes("ishlar")? `${styles.active}` : ""}>
                  <Link href={"/ishlar"}>
                      <a>Ishlar</a>
                  </Link>
                </li>
                <li>
                  <a>
                    Ru
                  </a>
                </li>
              </ul>
            </div>
         </div>
       </div>
    </section>
  )
}

export default Header