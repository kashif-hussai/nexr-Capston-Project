import CardComponent from "@/app/component/cardSection/card";
import CardSection3 from "@/app/component/cardSection3/CardSection3";
import ChefSection from "@/app/component/chef/Chef";
import Footer from "@/app/component/footer/Footer";
import MenuSection from "@/app/component/menu/Menu";
import Nevbar from "@/app/component/navbar/nav";
import SecondLast from "@/app/component/seond-last/Second-last";

const Homepage = () => {
    return(
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
export default Homepage;