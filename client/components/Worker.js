import React, {useEffect, useState} from 'react';
import styles from '../styles/DashboardJob.module.css'
import Switch from "react-switch";
import BeatLoader from "react-spinners/BeatLoader";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
import {BASE_URL} from "../Variables";
import {toast} from "react-toastify";


const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    zIndex:9

};

const Worker = () => {
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#000");
    const [pageLoad,setPageLoad]=useState(false)

    const [data,setData]=useState([])

    const fetchData = (token) => {
        setPageLoad(true)
        axios.get(`${BASE_URL}workers/notAllow`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
            .then((res)=>{
                setData(res.data.workers)
            })
            .catch((e)=>{
                console.log(e?.response?.data?.message)
            })
            .finally(()=>{
                setPageLoad(false)
            })
    }

    useEffect(()=>{
        const token=window.localStorage.getItem('token')
        fetchData(token)
    },[])



    const handleChange = (ch,el) => {
        setLoading(true)
        const token=window.localStorage.getItem('token')
        const {_id}=el
        if (ch){
            const newData=data.map(obj=>obj._id===_id?{...obj,isShow:true}:obj)
            setData(newData)
            axios.patch(`${BASE_URL}workers/${_id}`,{
                ...el,
                isShow:true
            },{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
                .then((res)=>{
                    fetchData(token)
                    console.log(res)
                })
                .catch((err)=>{
                    console.log(err)
                })
                .finally(()=>{
                    setLoading(false)
                })
        }else {
            const newData=data.map(obj=>obj._id===_id?{...obj,isShow:false}:obj)
            setData(newData)
        }
    }

    const deleteJob = (id) => {
        setLoading(true)
        const token=window.localStorage.getItem('token')
        axios.delete(`${BASE_URL}workers/${id}`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
            .then((res)=>{
                console.log(res)
                if (res.status){
                    const newData=data.filter((e)=>e._id !==id)
                    setData(newData)
                    toast.success('Job deleted')
                }

            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                setLoading(false)
            })
    }

    return (
        <section className={styles.dashboard_job}>
            {data?.length>=1 &&<table>
                <thead>
                <tr>
                    <th>NO</th>
                    <th>Mutaxassislik turi</th>
                    <th>Ma'lumoti</th>
                    <th>Ismi</th>
                    <th>Maosh</th>
                    <th>Telefon raqami</th>
                    <th>IsShow</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {data?.length >=1 && data?.map((item,i)=>{
                    const {_id,jobTitle,professionInfo,jobType,region,name,salary,phone,isShow}=item
                    return  <tr key={i}>
                        <td>{i+1}</td>
                        <td>{jobTitle}</td>
                        <td>{professionInfo}</td>
                        <td>{name}</td>
                        <td>{salary}</td>
                        <td>{phone}</td>
                        <td><Switch onChange={(checked)=>{handleChange(checked,item)}} checked={isShow} /></td>
                        <td>
                            <button onClick={()=>deleteJob(_id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                </svg>
                            </button>
                        </td>
                    </tr>
                })}
                </tbody>
                {loading && <div className={styles.loading_table}>
                    <BeatLoader
                        color={color}
                        loading={loading}
                        cssOverride={override}
                        size={15}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    <div className={styles.opacity}/>
                </div>}
            </table>}
            {!data.length>=1&&<div className={styles.no_data}>
                <h1>No Data</h1>
            </div>}
            {pageLoad&&<div className={styles.pageLoad}>
                <div className={styles.loader}>
                    <PulseLoader
                        color={"#27cc1c"}
                        loading={pageLoad}
                        cssOverride={override}
                        size={30}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    <h1>Loading...</h1>
                </div>
            </div>}
        </section>
    );
};

export default Worker;
