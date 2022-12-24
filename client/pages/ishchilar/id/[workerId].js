import React from 'react'
import {useRouter} from 'next/router'
import left from '../../../public/assets/left.png'
import Image from 'next/image'
import styles from '../../../styles/WorkerId.module.css'
import Link from 'next/link'
import Banner from '../../../components/Banner'
import {BASE_URL} from "../../../Variables";

const WorkerId = ({data}) => {
    const router=useRouter()
    const workerId=router?.query.workerId
    const {_id,jobTitle,professionInfo,experience,salary,jobType,region,name,gender,phone,create_at}=data
    const date=new Date(Number(create_at)).toLocaleString('sv')
  return (
    <section className={styles.workerId}>
        <div className='container'>
            <div className={styles.card_main}>
                <div className={styles.card}>
                    <div className={styles.card_header}>
                        <h3>{jobTitle} / <span>{salary}</span> /</h3>
                        <button>ID:{workerId}</button>
                    </div>
                    <div className={styles.card_body}>
                        <div className={styles.left}>
                            <ul>
                                <li><strong>Ismi va yili:</strong>{name}</li>
                                <li><strong>Ma'lumot:i</strong>{professionInfo}</li>
                                <li><strong>Jinsi:</strong>{gender}</li>
                                {create_at && <li className={styles.date}>⏰ {date}</li>}
                            </ul>
                        </div>
                        <div className={styles.right}>
                            <ul>
                                <li><strong>Ish turi:</strong>{jobType}</li>
                                <li><strong>Ish tajribasi:</strong>{experience} yil</li>
                                <li style={{textTransform:"capitalize"}}><strong>Shahar/viloyat:</strong>{region?.split('-').join(' ')}</li>
                                <li><strong>Tel raqami:</strong>{phone}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.card_footer}>
                        <Link href={"/ishchilar"}>
                            <a>
                                <Image width={32} height={22} objectFit="contain" src={left}/>
                                Ishchilar
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <Banner/>
    </section>
  )
}
export async function getServerSideProps(context) {

    //Get worker_id with query
    const id=context.query.worker_id

    // Fetch data from external API

    const res = await fetch(`${BASE_URL}workers/${id}`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default WorkerId
