import Banner from '../components/Banner'
import Intro from '../components/Intro'
import Statistics from '../components/Statistics'
import {BASE_URL} from "../Variables";



const Home=({data}) =>{
  return (
    <>
          <Intro/>
          <Statistics data={data}/>
          <Banner/>
    </>
  )
}
export async function getServerSideProps() {
    // Fetch data from external API

    const res = await fetch(`${BASE_URL}statistics`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
export default Home
