import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {toast} from "react-toastify";
import {BASE_URL} from "../../Variables";
import axios from "axios";
import Job from "../../components/Job";
import Worker from "../../components/Worker";
import Link from "next/link";
import styles from '../../styles/Dashboard.module.css'
import Image from "next/image";
import {useSelector,useDispatch} from "react-redux";
import {falsePage, truePage} from "../../redux/slices/page/pageSlice";

const Dashboard = () => {
    const show=useSelector((state)=>state.page.value)
    const dispatch = useDispatch()

    const router=useRouter()
    useEffect(()=>{

        const token=window.localStorage.getItem('token')

        axios.post(`${BASE_URL}login/verify`,{
            token
        })
            .then((res)=>{
                if (!res?.data?.user?.token){
                    router.push('/login')
                    toast.error("Please login")
                }
                dispatch(truePage())
                // setIsShow(true)
            })
            .catch((e)=>{
                router.push('/login')
                toast.error(e?.response?.data?.message || "Please Login")
                dispatch(falsePage())
            })

    },[])
    const handleClick = async (str) => {
        await router.push(str)
        router.reload()

    }
    return (
        <>
            {show && <section className={styles.dashboard}>
                <div className={styles.main}>
                    <div className={styles.left}>
                        <Link  href={"/"}>
                            <a>
                                <Image height={70} width={200} objectFit='contain' src={"https://ish-bor.uz/ish-bor_uz_logos.png"}/>
                            </a>
                        </Link>
                        {/*<button onClick={()=>handleClick('/')}>*/}
                        {/*    <Image height={70} width={200} objectFit='contain' src={"https://ish-bor.uz/ish-bor_uz_logos.png"}/>*/}
                        {/*</button>*/}
                        <div className={styles.links}>
                            <Link  href={{
                                pathname:"/dashboard",
                                query:{page:'jobs'}
                            }}>
                                <a className={router.query.page==='jobs'?styles.activeLink:''}>Jobs</a>
                            </Link>
                            <Link href={{
                                pathname:"/dashboard",
                                query:{page:'workers'}
                            }}>
                                <a className={router.query.page==='workers'?styles.activeLink:''}>Workers</a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.top}>
                           <button>Log Out</button>
                        </div>
                        {router.query.page==='jobs'&&<Job/>}
                        {router.query.page==='workers'&&<Worker/>}
                    </div>
                </div>
            </section>}
        </>
    );
};


export default Dashboard;
