import '../styles/globals.css'
import Layout from '../components/layout'
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {store} from "../redux/store";
import {Provider,} from "react-redux";


function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <Layout>
          <NextNProgress/>
          <Component {...pageProps} />
          <ToastContainer/>
        </Layout>
      </Provider>
  )
}

export default MyApp
