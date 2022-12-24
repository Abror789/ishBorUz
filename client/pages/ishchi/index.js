import React, {useState} from 'react'
import styles from '../../styles/Worker.module.css'
import Banner from '../../components/Banner'
import axios from "axios";
import {BASE_URL} from "../../Variables";
import {toast} from "react-toastify";

const Worker = () => {
    const [jobTitle,setJobTitle]=useState("")
    const [professionInfo,setProfessionInfo]=useState("Ma'lumot shart emas")
    const [experience,setExperience]=useState("")
    const [salary,setSalary]=useState("")
    const [jobType,setJobType]=useState("Doyimiy")
    const [region,setRegion]=useState("toshkent-shahar")
    const [age,setAge]=useState("")
    const [gender,setGender]=useState("Erkak")
    const [phone,setPhone]=useState("")



    const addJob = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}jobs`,{
            jobTitle,
            professionInfo,
            experience,
            salary,
            jobType,
            region,
            age,
            gender,
            phone
        })
            .then((res)=>{
                console.log(res)
                toast.success(res?.data?.message)
            })
    }
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
    <section className={styles.worker}>
        <div className="container">
            <h1>Ishchi qidirish</h1>
            <div className={styles.form_group}>
                <form onSubmit={addJob}>
                    <div className={styles.row}>
                        <div className={styles.col_four}>
                            <div className={styles.input_group}>
                                <label>Mutaxassislik turi*</label>
                                <input value={jobTitle} onChange={(e)=>setJobTitle(e.target.value)} required placeholder='Misol:Marketolog'/>
                            </div>
                            <div className={styles.input_group}>
                                <label>Ma'lumoti*</label>
                                <select value={professionInfo} onChange={(e)=>setProfessionInfo(e.target.value)}>
                                    <option value="Ma'lumot shart emas">Ma'lumot shart emas</option>
                                    <option value="O'rta">O'rta</option>
                                    <option value="Oliy">Oliy</option>
                                </select>
                            </div>
                            <div className={styles.input_group}>
                                <label>Ish tajribasi (yilda)*</label>
                                <input value={experience} onChange={(event => setExperience(Number(event.target.value)))} required type={"number"} placeholder='Misol:5'/>
                            </div>
                        </div>
                        <div className={styles.col_four}>
                            <div className={styles.input_group}>
                                <label>Maosh*</label>
                                <input value={salary} onChange={(event => setSalary(event.target.value))} required placeholder='Misol:500 000 dan 5 000 000 gacha'/>
                            </div>
                            <div className={styles.input_group}>
                                <label>Ish turi*</label>
                                <select value={jobType} onChange={(event => setJobType(event.target.value))}>
                                    <option value="Doimiy">Doimiy</option>
                                    <option value="Vaqtincha">Vaqtincha</option>
                                    <option value="Ahamiyatsiz">Ahamiyatsiz</option>
                                </select>
                            </div>
                            <div className={styles.input_group}>
                                <label>Shahar/viloyat*</label>
                                <select value={region} onChange={(event => setRegion(event.target.value))}>
                                    {regions.map((item)=>{
                                        return(
                                            <option key={item.id} value={item.link}>{item.title}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className={styles.col_four}>
                            <div className={styles.input_group}>
                                <label>Yoshi*</label>
                                <input value={age} onChange={(event => setAge(event.target.value))} required placeholder='Misol 20dan 35gacha'/>
                            </div>
                            <div className={styles.input_group}>
                                <label>Jinsi*</label>
                                <select value={gender} onChange={(event => setGender(event.target.value))}>
                                    <option  value={"erkak"}>Erkak</option>
                                    <option value={"ayol"}>Ayol</option>
                                    <option value={"ahamiyatsiz"}>Ahamiyatsiz</option>
                                </select>
                            </div>
                            <div className={styles.input_group}>
                                <label>Telefon raqamingiz*</label>
                                <input value={phone} onChange={(event)=>setPhone(Number(event.target.value))} required type={"number"} placeholder="Misol:+9989XYYYYYYY"/>
                            </div>
                        </div>
                    </div>
                    <button type={"submit"}>Yuborish</button>
                </form>
                <p style={{color:"red",fontSize:"20px",textAlign:"center"}}>
                    Ma'lumotlar to'g'ridan to'gri web site ga tushmaydi. Avval admin panelda ko'rib chiqiladi. <br/>
                    Faqat to'gri to'ldirilgan e'lonlat joylanadi.Har bir e'lon admin nazoratida!!!
                </p>
            </div>
        </div>
        <Banner/>
    </section>
  )
}

export default Worker
