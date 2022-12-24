import React, {useEffect, useState} from 'react'
import Banner from '../components/Banner'
import Link from 'next/link'
import styles from '../styles/Workers.module.css'
import { useRouter } from 'next/router'
import {BASE_URL} from "../Variables";

const RegionWorkers = ({data}) => {
    const router=useRouter()
    const originalRegion=router?.query?.region
    const region=router?.query?.region?.split('-').join(' ')

    const id=router.query.page||1
    const [num,setNum]=useState(null)
    const arr=[]
    useEffect(()=>{
       setNum(data.totalRegion)
    },[originalRegion])

    if (num/12>1){
        for (let i=0;i<num/12;i++){
            arr.push(i+1)
        }
    }

    const lastEl=arr[arr.length-1]
    const arr1=arr.slice(Number(id),Number(id)+2)
    const arr2=arr.slice(Number(id)-3,Number(id))
    const lastArr=Number(id)===2
        ?[1,2,...arr2,...arr1]
        :(Number(id)===3
                ?[...arr2,...arr1]
                :[1,...arr2,...arr1]

        )

  return (
    <section className={styles.workers}>
        {data.total>=1&&<div className='container'>
            <h1>Ishchi izlash <span>{region}</span></h1>
            <div className={styles.worker_main}>
                <div className={styles.row}>
                    {data.region.map((item, i) => {
                        const {_id, jobTitle, experience, region, name, create_at, salary} = item
                        const date = new Date(Number(create_at)).toLocaleString('sv')
                        return (
                            <div key={i} className={styles.col_three}>
                                <div className={styles.card}>
                                    <div className={styles.card_header}>
                                        <h3>{jobTitle} / <span>{salary}</span></h3>
                                    </div>
                                    <div className={styles.card_body}>
                                        <ul>
                                            <li style={{
                                                textTransform: "capitalize"
                                            }}><strong>Shahar/viloyat:</strong>{region?.split('-').join(' ')}</li>
                                            <li><strong>Ism va yili:</strong>{name}</li>
                                            <div className={styles.end}>
                                                {create_at && <span className={styles.date}>{date}</span>}
                                                {!create_at && <span></span>}
                                                <Link href={{
                                                    pathname: `/ishchilar/id/${i + 1}`,
                                                    query: {worker_id: _id}
                                                }}>
                                                    <a>
                                                        Batafsil
                                                        <span>...</span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>}
        {arr?.length>=2&&<div className={styles.pagination}>
            {Number(id)!==1&&<Link href={{
                pathname: "/regionWorkers",
                query: {
                    region:originalRegion,
                    page: Number(id) - 1
                }
            }}>
                <a>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </button>
                </a>
            </Link>}
            {lastArr?.map((item,index) => {
                return (
                    <Link  key={index} href={{
                        pathname:`/regionWorkers`,
                        query:{
                            region:originalRegion,
                            page:item
                        }
                    }}>
                        <a className={(id==item)?styles.activeLink:''}>
                            <button>{item }</button>
                        </a>
                    </Link>
                )
            })}
            {Number(id)!==lastEl&&<Link href={{
                pathname: "/regionWorkers",
                query: {
                    region:originalRegion,
                    page: Number(id) + 1
                }
            }}>
                <a>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                </a>
            </Link>}
        </div>}
        {data.total===0 && <div style={{height:"30vh"}} className="container">
            <h1>Ishchi izlash <span>{region}</span></h1>
            <h1 style={{color:"red"}}>No Data!!!</h1>
        </div>}
        <Banner/>
    </section>
  )
}
export async function getServerSideProps(context) {

    //Get worker_id with query
    const region=context.query.region
    const id=context.query.page || 1

    // Fetch data from external API

    const res = await fetch(`${BASE_URL}workers/region/${region}?page=${id}`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
export default RegionWorkers
