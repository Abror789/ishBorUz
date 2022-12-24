import Link from 'next/link'
import React from 'react'
import styles from '../styles/Banner.module.css'

const Banner = () => {
    const regions=[
        {
            id:1,
            title:"Toshkent shahar",
            link:"toshkent-shahar"
        },
        {
            id:2,
            title:"Toshkent viloyati",
            link:"toshkent-viloyati"
        },
        {
            id:3,
            title:"Andijon viloyati",
            link:"andijon-viloyati"
        },
        {
            id:4,
            title:"Buxoro viloyati",
            link:"buxoro-viloyati"
        },
        {
            id:5,
            title:"Farg'ona viloyati",
            link:"fargona-viloyati"
        },
        {
            id:6,
            title:"Jizzax viloyati",
            link:"jizzax-viloyati"
        },
        {
            id:7,
            title:"Xorazm viloyati",
            link:"xorazm-viloyati"
        },
        {
            id:8,
            title:"Namangan viloyati",
            link:"namangan-viloyati"
        },
        {
            id:9,
            title:"Navoiy viloyati",
            link:"navoiy-viloyati"
        },
        {
            id:10,
            title:"Qashqadaryo viloyati",
            link:"qashqadaryo-viloyati"
        },
        {
            id:11,
            title:"Qoraqalpog'iston",
            link:"qoraqalpogiston"
        },
        {
            id:12,
            title:"Samarqand viloyati",
            link:"samarqand-viloyati"
        },
        {
            id:13,
            title:"Sirdaryo-viloyati",
            link:"sirdaryo-viloyati"
        },
        {
            id:14,
            title:"Surxandaryo Viloyati",
            link:"surxandaryo-viloyati"
        },
        
    ]
  return (
    <section className={styles.banner}>
        <div className='container'>
            <div className={styles.row}>
                <div className={styles.left}>
                    <h6>Shahar va viloyatlar bo'yicha ishchilar</h6>
                    <div className={styles.card_row}>
                        <div>
                            <ul>
                                {regions.slice(0,5).map((item)=>{
                                    return(
                                        <li key={item.id}>
                                            <Link href={{
                                                pathname:`/regionWorkers`,
                                                query:{region:`${item.link}`}
                                            }}>
                                                <a>{item.title}</a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <ul>
                                {regions.slice(5,10).map((item)=>{
                                    return(
                                        <li key={item.id}>
                                            <Link href={{
                                                pathname:`/regionWorkers`,
                                                query:{region:`${item.link}`}
                                            }}>
                                                <a>{item.title}</a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <ul>
                                {regions.slice(10,14).map((item)=>{
                                    return(
                                        <li key={item.id}>
                                            <Link href={{
                                                pathname:`/regionWorkers`,
                                                query:{region:`${item.link}`}
                                            }}>
                                                <a>{item.title}</a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                <h6>Shahar va viloyatlar bo'yicha ishlar</h6>
                <div className={styles.card_row}>
                        <div>
                            <ul>
                                {regions.slice(0,5).map((item)=>{
                                    return(
                                        <li key={item.id}>
                                            <Link href={{
                                                pathname:`/regionJobs`,
                                                query:{region:`${item.link}`}
                                            }}>
                                                <a>{item.title}</a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <ul>
                                {regions.slice(5,10).map((item)=>{
                                    return(
                                        <li key={item.id}>
                                            <Link href={{
                                                pathname:`/regionJobs`,
                                                query:{region:`${item.link}`}
                                            }}>
                                                <a>{item.title}</a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <ul>
                                {regions.slice(10,14).map((item)=>{
                                    return(
                                        <li key={item.id}>
                                            <Link href={{
                                                pathname:`/regionJobs`,
                                                query:{region:`${item.link}`}
                                            }}>
                                                <a>{item.title}</a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner