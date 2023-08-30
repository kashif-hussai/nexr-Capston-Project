import Image from "next/image";
import  "./sLast.css";
import logo1 from "../assets/images/googleLogo.svg"
import logo2 from "../assets/images/iphoneLogo.svg"
import cheaf from "../assets/images/chafe.svg"


const SecondLast = ( ) =>{
    return(
  <div>
     <div className="mt-5 pt-5">
        <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-7">
            <div>
                <h2 className="CardMargin">It’s Now More Easy to Order <br /> by Our Mobile App</h2>
                <p>All you need to do is downlode one of the best delivery apps, make <br />
                 a and most companies are opting  for mobile app devlopment for <br />
                 food delivery</p> 
                 <span>
                 <Image src={ logo1 } alt="google"/>
                <span className="ps-5"> <Image src={logo2} alt="iphone"/> </span>
                 </span>
            </div>
        </div>

    
        <div className="col-md-4">
            <div>
            <Image src={cheaf} alt="chef"/>
            </div>
        </div>

        </div>

     </div>
  </div>
    )
    
  };
  export default SecondLast