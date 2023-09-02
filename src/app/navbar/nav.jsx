import Image from "next/image";
import "./nav.css"
import MLogo from "../assets/images/mainLogo.svg"
import HeartIcon from "../assets/images/HeartIcon.svg"
import PBotton from "../assets/images/play button.svg"
import leady from "../assets/images/chafe-wife.svg"
import RSearch from "../assets/images/RSearch.svg"
import LSearch from "../assets/images/lSearch.svg"
import dArrow from "../assets/images/DownArrow.svg"
import Orange from "../assets/images/orange.svg"
import underLine from "../assets/images/underLine.svg"
import Arrow from "../assets/images/ArrowUp.png"

const Nevbar = ( ) =>{
  return(
<div>
    <div className="NavBg">
    
    <div class="container">
  
   
    <nav class="navbar navbar-expand-lg">
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
          <div className="col-md-6"> 
          <div ><Image src={HeartIcon } alt=""/> <span>People Trust us</span> </div>
          <h1 className="pt-2 tSize"><b>We're <span className="text-danger">Serious</span> For <Image src={Orange} alt=""/> <br />
           <span className="text-danger"> Food</span> & <span className=" position-relative t-color">Delivery
            <span className="position-absolute top-100 start-50 translate-middle"><Image src={underLine} alt=""/>
            </span> </span>.</b></h1>
           <p className="py-3 pt-5 pSize">Best cooks and best delivery guys all at your <br />
            service. Hot tasty food will reach you in 60 <br />
             minutes.</p>
          <div className="border search py-2 px-3"> <Image src={RSearch } alt=""/> <input  type="text" className="bNone" placeholder="email" /> 
          <Image height={30} src={LSearch} class="img-fluid"  alt=""/> </div>
          <div className="pt-4 pSize"> <span mb-5><button type="button" class="btn btn-danger rounded-pill px-4">Downlode App </button> </span>
         <span className="ps-3 pt-5 pSize"> <Image height={90} src={PBotton} class="img-fluid"  alt=""/> Watch Video  </span>
         </div>
         <div className="pt-5 Dnone"> <Image src={dArrow}  class="img-fluid" alt="darrow"/> </div>
       
          </div>


          <div className="col-md-6 position-relative">
          <div className="position-absolute Margin Dnone ">
            <Image height={650} src={leady}  alt=""/>
            </div>
          </div>


        </div>

      </div>

    </div>
</div>
  )
  
};
export default Nevbar