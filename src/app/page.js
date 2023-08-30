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


export default function Home() {
  return (
   <>
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
