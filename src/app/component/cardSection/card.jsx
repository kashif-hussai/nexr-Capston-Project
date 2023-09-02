import Image from "next/image";
import img1 from "../../assets/images/sp1.svg"
import img0 from "../../assets/images/sp0.svg"
import starImage from "../../assets/images/sp1star.svg"
import Leaf from "../../assets/images/leafRight.svg"
import  "./style.css";


const CardComponent = ( ) =>{
    return(
  <div>
      <div className="text-center mx-5">
          <div className="tSize " >Today <span className="text-danger"> special </span> offers</div>
          <p className="pSize pt-5"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br />
               industry's standard dummy text ever since the 1500s</p>
      </div>
   <span className="Dnone ps-4">  <Image height={150} src={img0}  alt="pic 1" /> </span>
      <div className="container ">
            <div className="row row-gap-5 ">
                
            <div className="col-md-3 position-relative">
                <div className="imgP d-flex justify-content-center "><Image src={img1} className="img-fluid"  alt="img 2"/> </div>
                <div className="text-center  rounded-4 boxColr">
                
                <div className="pSize">
                <span > <Image src={starImage} className="img-fluid"  alt="img 2"/> </span>
                        <h5 className="text-danger mt-4 ">Kebab</h5>
                        <p className="pb-3 ">Lorem Ipsum is simply dummy <br />
                         text of the printing and <br />
                          typesetting industry</p>
                          <div className="btnSize position-absolute top-100 start-50 translate-middle">
                          <button type="button" class="btn btn-danger rounded-pill px-4">Danger</button>
                          </div>
                          </div>
                          </div>
                </div>
                <div className="col-md-3 position-relative Dnone  ">
                <div className="imgP "><Image src={img1} className="img-fluid"  alt="img 2"/> </div>
                <div className="text-center  rounded-4 boxColr">
                
                <div className="pSize">
                <span > <Image src={starImage} className="img-fluid"  alt="img 2"/> </span>
                        <h5 className="text-danger mt-4">Kebab</h5>
                        <p className="pb-3">Lorem Ipsum is simply dummy <br />
                         text of the printing and <br />
                          typesetting industry</p>
                          <div className="btnSize position-absolute top-100 start-50 translate-middle">
                          <button type="button" class="btn btn-danger rounded-pill px-4">Danger</button>
                          </div>
                          </div>
                          </div>
                </div>
                <div className="col-md-3 position-relative Dnone  ">
                <div className="imgP "><Image src={img1} className="img-fluid"  alt="img 2"/> </div>
                <div className="text-center  rounded-4 boxColr">
                
                <div className="pSize">
                <span > <Image src={starImage} className="img-fluid"  alt="img 2"/> </span>
                        <h5 className="text-danger mt-4">Kebab</h5>
                        <p className="pb-3">Lorem Ipsum is simply dummy <br />
                         text of the printing and <br />
                          typesetting industry</p>
                          <div className="btnSize position-absolute top-100 start-50 translate-middle">
                          <button type="button" class="btn btn-danger rounded-pill px-4">Danger</button>
                          </div>
                          </div>
                          </div>
                </div>
                <div className="col-md-3 position-relative Dnone  ">
                <div className="imgP "><Image src={img1} className="img-fluid"  alt="img 2"/> </div>
                <div className="text-center  rounded-4 boxColr">
                
                <div className=" pSize">
                <span > <Image src={starImage} className="img-fluid"  alt="img 2"/> </span>
                        <h5 className="text-danger mt-4">Kebab</h5>
                        <p className="pb-3">Lorem Ipsum is simply dummy <br />
                         text of the printing and <br />
                          typesetting industry</p>
                          <div className="btnSize position-absolute top-100 start-50 translate-middle">
                          <button type="button" class="btn btn-danger rounded-pill px-4">Danger</button>
                          
                          </div>
                          </div>
                          </div>
                </div>
                </div>
               
            </div>
            <div className="position-relative mt-5 pt-5">
                <span className="position-absolute bottom-0 end-0 " > <Image height={100} src={Leaf} className="img-fluid"  alt="img 2"/> </span>
                </div>
  </div>
    )
    
  };
  export default CardComponent