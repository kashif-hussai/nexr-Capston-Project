// import Image from 'next/image'
// import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Nevbar from './navbar/nav'
import CardComponent from './cardSection/card'
import ChefSection from './chef/Chef'
import MenuSection from './menu/Menu'
import CardSection3 from './cardSection3/CardSection3'
import SecondLast from './seond-last/Second-last'
import Footer from './footer/Footer'
import Script from 'next/script'


export default function Home() {
  return (
   <>
   <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
   <Nevbar/>
  <CardComponent/>
  <ChefSection/>
  <MenuSection/>
  <CardSection3/>
  <SecondLast/>
  <Footer/>
   </>
  )
}
