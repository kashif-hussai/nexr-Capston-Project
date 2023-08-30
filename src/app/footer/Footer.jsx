import Image from "next/image";
import socialMedia from "../assets/images/smIcons.svg"


const Footer = ( ) =>{
    return(
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-4"><h2 className="text-danger"> <b>Foodhut </b></h2>
        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor</p>
        <Image src={socialMedia} alt="" />
        </div>
        <div className="col-md-2"> 
        <div>
            <h5 className="text-danger"> <b>About Us </b></h5>
            <p> About Us</p>
                <p>Service Us</p>
                <p> Contact</p>
                <p> Company</p>
                
            </div>
            </div>
        <div className="col-md-2">
            <div>
                <h5 className="text-danger"> <b>Company </b></h5>
                <p>Partnership</p>
                <p>Terms of Use</p>
                <p> Privacy</p>
                <p> Sitemap</p>
                
            </div>
        </div>
        <div className="col-md-4">
            <div>
                <h5 className="text-danger"> <b> Get in touch </b></h5>
                <p>Lorem ipsum dolor sit amet, consectetur <br />
                 adipiscing elit, sed do eiusmod tempor</p>
                
                 <input className="border-none  rounded-pill" type="email" placeholder="Email" /> <button type="button" class="btn btn-danger rounded-pill px-4">Danger</button>
            </div>
        </div>
      </div>
      <div > <p className="text-center py-5 mt-5">Copyright © 2022 Foodhut.</p> </div>
      </div>
  </div>
    )
    
  };
  export default Footer