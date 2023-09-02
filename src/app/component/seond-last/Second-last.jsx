import Image from "next/image";
import  "./sLast.css";
import logo1 from "../../assets/images/googleLogo.svg"
import logo2 from "../../assets/images/iphoneLogo.svg"
import cheaf from "../../assets/images/chafe.svg"


const SecondLast = ( ) =>{
    return(
  <div>
     <div className="mt-5 pt-5">
        <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-7">
            <div>
                <div className="CardMargin t-size">It’s Now <span className="text-danger">More Easy</span> to <span className="t-color"> Order </span> <br />
                 by Our Mobile <span className="text-danger"> App </span></div>
                <p className="py-4 paraSize">All you need to do is downlode one of the best delivery apps, make <br />
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