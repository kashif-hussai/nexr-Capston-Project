import Image from "next/image";
import chef from "../../assets/images/mt-2.PNG"
import icon1 from "../../assets/images/24Icon.svg"
import icon2 from "../../assets/images/phoneicon.svg"
import icon3 from "../../assets/images/bookeIcon.svg"
import icon4 from "../../assets/images/aroow.svg"
import "./chef.css"

const ChefSection = ( ) =>{
    return(
  <div>
     
        <div className="row my-5 mx-0 ">
        <div className="col-md-4 ">
        <div className=""> <Image src={chef} className="img-fluid"  alt="chef"/> </div> 
        </div>
        <div className="col-md-1 position-relative disNone mx-0 "> 
        <div className="position-absolute top-0 start-50 translate-middle-x disNone mx-0 paddingleft"> <Image height={100} src={icon4}  alt="arrow"/> </div>
          
        </div>
        <div className="col-md-7 ChefMArgin paddingLaft mx-0">
            <div>
               <b className=""> <h1 className=" t-size">We are <span className="text-danger ">  more</span> than <br />  <span className="t-color">multiple</span> service</h1></b>
                <p className="pSize">This is a type of resturent which typically serves food and drink, in addition to light <br />
                 refreshments such as baked goods or snacks. The term comes frome the rench <br />
                  word meaning food</p>

                  <div className="row  mx-0 ">
                    <div className="col-md-4 mx-0 ">
                        <div>
                       <p> <Image src={icon2 } className="img-fluid"  alt="chef"/> <span> Online Order</span></p>
                       <p> <Image src={icon3 } className="img-fluid"  alt="chef"/> <span> Pre-Reservation</span></p>
                       <p> <Image src={icon3 } className="img-fluid"  alt="chef"/> <span> Super Chef</span></p>
                      <span className=""> <button type="button" class="btn btn-danger rounded-pill px-3 ">About Us</button></span>
                        </div>
                    </div>
                    <div className="col-md-4 mx-0">
                        <div>
                        <p> <Image src={icon1} className="img-fluid"  alt="chef"/> <span> 24/7 Service</span></p>
                        <p> <Image src={icon3 } className="img-fluid"  alt="chef"/> <span>Pre-Reservation</span></p>
                        <p> <Image src={icon3 } className="img-fluid"  alt="chef"/> <span> Clean Kitchen</span></p>
                        </div>
                    </div>
                    <div className="col-md-4 mx-0"></div>
                
                  </div>
            </div>
        </div>
        </div>
      
  </div>
    )
    
  };
  export default ChefSection