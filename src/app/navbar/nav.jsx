import Image from "next/image";
import "./nav.css"
import MLogo from "../assets/images/mainLogo.svg"
import HeartIcon from "../assets/images/HeartIcon.svg"
import PBotton from "../assets/images/play button.svg"
import leady from "../assets/images/chafe-wife.svg"

const Nevbar = ( ) =>{
  return(
<div>
    <div>
    <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="" class="d-inline-flex link-body-emphasis text-decoration-none mt-3">
          <Image src={MLogo} alt=""/>
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-end mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Today special offers</a></li>
        <li><a href="#" class="nav-link px-2 link-secondary">Why FoodHut</a></li>
        <li><a href="#" class="nav-link px-2 link-secondary">Our Menu</a></li>
        <li><a href="#" class="nav-link px-2 link-secondary">Our Popular food</a></li>
      
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-danger rounded-pill">Downlode App</button>
      </div>
    </header>
  </div>

                {/* < Main CardSection > */}

      <div className=" container mt-5 pt-5">
        <div className="row">
          <div className="col-md-7"> 
          <div ><Image src={HeartIcon } alt=""/> <span>People Trust us</span> </div>
          <h1 className="pt-2"><b>We're <span className="text-danger">Serious</span> For <br />
           <span className="text-danger"> Food</span> & <span>Delivery</span>.</b></h1>
           <p>Best cooks and best delivery guys all at your <br />
            service. Hot tasty food will reach you in 60 <br />
             minutes.</p>
          <div className="border search py-2 "> <Image src={HeartIcon } alt=""/> <input  type="text" className="bNone" placeholder="email" /> <Image src={HeartIcon } alt=""/> </div>
          <div className="pt-4"><button type="button" class="btn btn-danger rounded-pill px-4">Downlode App</button>
         <span className="ps-3 "> <Image src={PBotton} alt=""/> Watch Video  </span>
          </div>
          </div>


          <div className="col-md-5">
          <div className="">
            <Image  width={700} src={leady} className="img-fluid" alt=""/>
            </div>
          </div>


        </div>

      </div>

    </div>
</div>
  )
  
};
export default Nevbar