import Image from "next/image";
import "./nav.css"
import MLogo from "../../assets/images/mainLogo.svg"
import HeartIcon from "../../assets/images/HeartIcon.svg"
import Button from "../../assets/images/Playbutton.svg"
import RSearch from "../../assets/images/RSearch.svg"
import LSearch from "../../assets/images/lSearch.svg"
import down from "../../assets/images/arrowDown.svg"
import mango from "../../assets/images/orange.svg"
import line from "../../assets/images/underLine.svg"
import Arrow from "../../assets/images/ArrowUp.png"
import bgImage from "../../assets/images/girl.svg"
import Fire from "../../assets/images/fire.svg"
import Lcard from "../../assets/images/L card.svg"
import Rcard from "../../assets/images/R card.svg"
import smile4 from "../../assets/images/smile4.svg"
import smile3 from "../../assets/images/smile3.svg"
import smile2 from "../../assets/images/smile2.svg"
import smile1 from "../../assets/images/smile1.svg"
import smile from "../../assets/images/smile.svg"
import GreenLeaf from "../../assets/images/Green Leaf.svg"
import arrow2 from "../../assets/images/arrow2.svg"



const Nevbar = ( ) =>{
  return(
<div>
    <div className="NavBg mx-0 ps-0">
    
    <div class="container">
  
    
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
  
     <Image src={MLogo} alt="main icon" />
  
   
     
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
     aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
   
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Today special offers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Why FoodHut</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Our Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Our Popular food</a>
        </li>
       
        
      </ul>
    
   <div className="ps-5">   <button type="button" class="btn btn-danger rounded-pill ">Downlode App</button> </div>
    </div>
  </div>
</nav>
  </div>

                {/* < Main CardSection > */}

      <div className=" container mt-5 pt-5 ">
        <div className="row">
          <div className="col-md-6 position-relative"> 
          <div className="position-absolute topMargin disNone"> <Image height={150} src= {Arrow} alt=""/></div>
          <div ><Image src={HeartIcon } alt=""/> <span>People Trust us</span> </div>
          <h1 className="pt-2 tSize"><b>We're <span className="text-danger">Serious</span> For <Image src={mango} alt=""/> <br />
           <span className="text-danger"> Food</span> & <span className=" position-relative t-color">Delivery
            <span className="position-absolute top-100 start-50 translate-middle"><Image height={9} src={line}  alt=""/>
            </span> </span>.</b></h1>
           <p className="py-3 pt-5 pSize">Best cooks and best delivery guys all at your <br />
            service. Hot tasty food will reach you in 60 <br />
             minutes.</p>
          <div className="border search py-2 px-3"> <Image src={RSearch } alt=""/> <input  type="text" className="bNone" placeholder="Search food" /> 
          <Image height={30} src={LSearch} class="img-fluid"  alt=""/> </div>
          <div className="pt-2 pSize"> <span mb-5><button type="button" class="btn btn-danger rounded-pill px-4">Downlode App </button> </span>
         <span className=" pt-5 pSize"> <Image height={90} src={Button } class="img-fluid  mt-4"  alt=""/> Watch Video  </span>
         </div>
         <div className="pt-5 mt-5 disNone"> <Image src={down}  class="img-fluid" alt="darrow"/> </div>
       
          </div>
          

          <div className="col-md-6 position-relative">
            
          <div className="position-absolute Margin disNone ">
            <Image height={500} src={bgImage} className="img-fluid"  alt=""/> 
            <div className="sMargin disNone"> <Image   src={smile}  alt=""/>
            </div>
            <div className="SmargenOne disNone "> <Image height={200}  src={smile1} className="img-fluid" alt=""/></div>
            <div className="Smargentwo disNone"> <Image height={175}  src={smile2} className="img-fluid" alt=""/></div>
            <div className="Smargenthree disNone"> <Image height={175}  src={smile3} className="img-fluid" alt=""/></div>
            <div className="Smargenfour disNone"> <Image height={400}  src={smile4} className="img-fluid" alt=""/></div>
            <div className=" FireMargin disNone "> <Image  src={Fire} className="img-fluid" alt=""/></div>
            <div className=" RCardMargin disNone "> <Image  src={Rcard} className="img-fluid" alt=""/></div>
            <div className=" LCardMargin disNone"> <Image height={120} src={Lcard} className="img-fluid" alt=""/></div>
            <div className=" GreenLeafMargin disNone "> <Image height={160} src={GreenLeaf}  className="img-fluid" alt=""/></div>
            <div className=" ArrowMargin disNone "> <Image height={250}  src={arrow2} className="img-fluid"  alt=""/></div>
            </div>
           
           
          </div>


        </div>

      </div>
    </div>
</div>
  )
  
};
export default Nevbar