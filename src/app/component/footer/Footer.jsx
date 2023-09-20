import Image from "next/image";
import socialMedia from "../../assets/images/smIcons.svg"
import "./footer.css"


const Footer = ( ) =>{
    return(
  <div>
    <div className="container ">
      <div className="row">
        <div className="col-md-4 paddingLaft"><h2 className="text-danger"> <b>Foodhut </b></h2>
        <p className="fTextSize">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor</p>
        <Image src={socialMedia} alt="" />
        </div>
        <div className="col-md-4 d-flex gap-5 paddingLaft"> 
      
        <div className="fTextSize">
            <h5 className="text-danger "> <b>About Us </b></h5>
            <p> About Us</p>
                <p>Service Us</p>
                <p> Contact</p>
                <p> Company</p>
                
            </div>
            <div  className="fTextSize ">
                <h5 className="text-danger"> <b>Company </b></h5>
                <p>Partnership</p>
                <p>Terms of Use</p>
                <p> Privacy</p>
                <p> Sitemap</p>
                
            </div>
            </div>

        <div className="col-md-4">
            <div  className="fTextSize">
                <h5 className="text-danger paddingLaft"> <b> Get in touch </b></h5>
                <p className="paddingLaft">Lorem ipsum dolor sit amet, consectetur <br />
                 adipiscing elit, sed do eiusmod tempor</p>
                
                 <input className="border-none  rounded-pill py-1 ps-3" type="email" placeholder="Email" /> 
               <span className="ps-2">  <button type="button" class="btn btn-danger rounded-pill px-2">Subscribe</button> </span>
            </div>
        </div>
      </div>
      <div > <p className="text-center py-5 mt-5 fTextSize ">Copyright © 2022 Foodhut.</p> </div>
      </div>
  </div>
    )
    
  };
  export default Footer