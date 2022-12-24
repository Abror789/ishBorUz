import React from 'react'
import styles from '../styles/Statistics.module.css'

const Statistics = ({data}) => {

    const {work}=data[0]
    const {job}=data[1]

  return (
    <section className={styles.statistics}>
        <div className='container'>
            <div className={styles.row}>
                <div>
                    <h4>{work}+</h4>
                    <span>Ishchilar</span>
                </div>
                <div>
                    <h4>{job}+</h4>
                    <span>Ishlar</span>
                </div>
                <div>
                    <h4>400+</h4>
                    <span>Kunlik tashrif <br/> buyuruvchilar</span>
                </div>
            </div>
        </div>
    </section>
  )
}


export default Statistics
