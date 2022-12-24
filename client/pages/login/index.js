import React, {useEffect, useState} from 'react';
import styles from '../../styles/Login.module.css'
import Head from 'next/head'
import axios from "axios";
import {BASE_URL} from "../../Variables";
import {useRouter} from "next/router";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {falsePage, truePage} from "../../redux/slices/page/pageSlice";


const Login = () => {
    const router=useRouter()
    const show=useSelector((state)=>state.page.value)

    useEffect(()=>{

        const token=window.localStorage.getItem('token')

        axios.post(`${BASE_URL}login/verify`,{
            token
        })
            .then((res)=>{
                if (!res?.data?.user?.token){
                    router.push('/login')
                    // toast.error("Please login")
                }else {
                    router.push('/dashboard?page=jobs')
                }
            })
            .catch((e)=>{
                router.push('/login')
                // toast.error(e?.response?.data?.message || "Please Login")
            })

    },[])

    const [login,setLogin]=useState("")
    const [password,setPassword]=useState("")
    const loginAdmin = (e) => {
      e.preventDefault()
        axios.post(`${BASE_URL}login`,{
            login,
            password
        })
            .then((res)=>{
                console.log(res)
                const {token}=res.data
                localStorage.setItem("token",token)
                if (token){
                    router.push("/dashboard?page=jobs")
                }
            })
            .catch((e)=>{
                console.log(e.message)
                toast.error(e?.response?.data?.message)
            })
    }
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <section className={styles.login}>
                <div className={styles.container}>
                    <h1>Login to Dashboard</h1>
                    <form onSubmit={loginAdmin}>
                        <label>Login <span>*</span></label>
                        <input value={login} onChange={(event => setLogin(event.target.value))} placeholder={"login"} type={"text"} required/>
                        <label>Password <span>*</span></label>
                        <input value={password} onChange={(event => setPassword(event.target.value))} placeholder={"password"} type={"password"} required/>
                        <button type={"submit"}>Login</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Login;
