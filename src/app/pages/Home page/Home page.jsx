// import Apis from "@/app/component/apis/apis";
import CardComponent from "@/app/component/cardSection/card";
import CardSection2 from "@/app/component/cardSection2/cardSection2";
import CardSection3 from "@/app/component/cardSection3/CardSection3";
import ChefSection from "@/app/component/chef/Chef";
import Footer from "@/app/component/footer/Footer";
import MenuSection from "@/app/component/menu/Menu";
import Nevbar from "@/app/component/navbar/nav";
import SecondLast from "@/app/component/seond-last/Second-last";

const Homepage = () => {
    return(
        <>
        {/* <Apis/> */}
        <Nevbar/>
        <CardComponent/>
         <ChefSection/>
          <MenuSection/>
          <CardSection2/>
          <CardSection3/>
           <SecondLast/>
      <Footer/>
        
        </>
    )
}
export default Homepage;