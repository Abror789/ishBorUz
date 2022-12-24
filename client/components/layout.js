import React, {useEffect, useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import {useRouter} from "next/router";


const Layout = ({children}) => {
    const router=useRouter()
    const {pathname}=router
    const [isShow,setIsShow]=useState(true)
    useEffect(()=>{
        if (pathname.includes('login') || pathname.includes('dashboard')){
            setIsShow(false)
        }else if (pathname==='/'){
            setIsShow(true)
        }
    },[pathname])


  return (
    <>
    <Head>
        <title>Ish izlash va ishchi izlash Toshkent Samarqand Andijon Namangan Fargona | ish bor, ish izlash, ishchi izlash Toshkent,
          Yunusobod, Chilonzor, Mirzo-ulugbek, Samarqand, Andijon, Namangan, Fargona, Buxoro, Navoi, Xorazm, Qashqadaryo, Surxondaryo,
          Sirdaryo, Nukus, Qoraqalpogiston, Qarshi, Guliston, Jizzah - ish-bor.uz</title>
        <meta name="description" content="Ish izlash va ishchi izlash Toshkent Samarqand Andijon Namangan Fargona | ish bor, ish izlash,
         ishchi izlash Toshkent, Yunusobod, Chilonzor, Mirzo-ulugbek, Samarqand, Andijon, Namangan, Fargona, Buxoro, Navoi, Xorazm,
         Qashqadaryo, Surxondaryo, Sirdaryo, Nukus, Qoraqalpogiston, Qarshi, Guliston, Jizzah - ish-bor.uz" />
         <meta name='keywords' content="ish bor, ish izlash, ishchi izlash Toshkent, Yunusobod, Chilonzor, Mirzo-ulugbek, Samarqand,
         Andijon, Namangan, Fargona, Buxoro, Navoi, Xorazm, Qashqadaryo, Surxondaryo, Sirdaryo, Nukus, Qoraqalpogiston, Qarshi,
         Guliston, Jizzah - ish-bor.uz"/>
         <meta property='og:title' content="Ish izlash va ishchi izlash Toshkent Samarqand Andijon Namangan Fargona | ish bor, ish
         izlash, ishchi izlash Toshkent, Yunusobod, Chilonzor, Mirzo-ulugbek, Samarqand, Andijon, Namangan, Fargona, Buxoro, Navoi,
         Xorazm, Qashqadaryo, Surxondaryo, Sirdaryo, Nukus, Qoraqalpogiston, Qarshi, Guliston, Jizzah - ish-bor.uz"/>
         <meta property='og:description' content="Ish izlash va ishchi izlash Toshkent Samarqand Andijon Namangan Fargona | ish bor,
          ish izlash, ishchi izlash Toshkent, Yunusobod, Chilonzor, Mirzo-ulugbek, Samarqand, Andijon, Namangan, Fargona, Buxoro,
          Navoi, Xorazm, Qashqadaryo, Surxondaryo, Sirdaryo, Nukus, Qoraqalpogiston, Qarshi, Guliston, Jizzah - ish-bor.uz"/>
          <meta property='og:site_name' content='ish-bor.uz'/>
          <meta property='og:url' content='https://ish-bor.uz'/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;0,900;1,500&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        {isShow && <Header/>}
        <main>{children}</main>
        {isShow && <Footer/>}
  </>
  )
}

export default Layout
