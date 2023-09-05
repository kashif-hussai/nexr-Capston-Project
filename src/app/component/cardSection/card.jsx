import Image from "next/image";
import img1 from "../../assets/images/m1s.svg"
import rating2 from "../../assets/images/rating2.svg"
import rating3 from "../../assets/images/rating3.svg"
import img0 from "../../assets/images/sp0.svg"
import starImage from "../../assets/images/m2.svg"
import Leaf from "../../assets/images/leafRight.svg"
import star from "../../assets/images/starIcon.svg"
import chicken1 from "../../assets/images/chicken2.svg"
import chicken2 from "../../assets/images/chicken3.svg"
import chicken3 from "../../assets/images/chicken5.svg"
import price from "../../assets/images/$1.svg"
import price1 from "../../assets/images/$2.svg"
import price2 from "../../assets/images/$3.svg"
import price3 from "../../assets/images/$1.svg"
import  "./style.css";


const CardComponent = (props) =>{
const data = [
  {
    immageUrl1: img1 ,
    immageUrl4: price ,
    immageUrl2: starImage ,
    immageUrl3: star ,
    Ratting: "(4.5)",
    heading: "Kebab",
    paragraph : "Lorem Ipsum is simply dummy  text of the printing and  typesetting industry"

  },
  {
    immageUrl1: rating2 ,
    immageUrl4: price1 ,
    immageUrl2: chicken1 ,
    immageUrl3: star ,
    Ratting: "(4.8)",
    heading: "Chicken Tikka",
    paragraph : "Lorem Ipsum is simply dummy  text of the printing and  typesetting industry"
  },
  {
    immageUrl1: rating3 ,
    immageUrl4: price2 ,
    immageUrl2: chicken2 ,
    immageUrl3: star ,
    Ratting: "(4.2)",
    heading: "Desi Chowmein",
    paragraph : "Lorem Ipsum is simply dummy  text of the printing and  typesetting industry"
  },
  {
    immageUrl1: img1 ,
    immageUrl4: price3 ,
    immageUrl2: chicken3,
    immageUrl3: star ,
    Ratting: "(5.0)",
    heading: "Chicken Chargha",
    paragraph : "Lorem Ipsum is simply dummy  text of the printing and  typesetting industry"
  }
]


    return(
  <div>
      <div className="text-center mx-5 mt-5  ">
          <div className="t-size pt-5 " >Today <span className="text-danger"> special </span> offers</div>
          <p className="pSize pt-5"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br />
               industry's standard dummy text ever since the 1500s</p>
      </div>
   <span className="disNone ">  <Image height={100} src={img0}  alt="pic 1" /> </span>
      
          
                
            <div>
            <div className="container ">
                  <div className="row  ">
          


              {data.map((item)=>{
                 return(
                 
                  <div className="col-md-3 position-relative">
                  <div className="imgP d-flex justify-content-center "><Image src={item.immageUrl2} className="img-fluid"  alt="img 2"/> </div>
                  <div className="position-absolute possition priceMargin"> <Image src={item.immageUrl4}alt=""/> </div>
                  <div className="text-center  rounded-4 boxColr">
                  
                  <div className="pSize">
                  <span > <Image src={item.immageUrl1} className="img-fluid"  alt="img 2"/>
                   <Image src={item.immageUrl3} className="img-fluid"  alt="img 2"/>
                    {item.Ratting} </span>
                          <h5 className="text-danger mt-4 ">{item.heading}</h5>
                          <p className="pb-3 py-1 px-2 ">{item.paragraph}</p>
                            <div className="btnSize position-absolute top-100 start-50 translate-middle">
                            <button type="button" class="btn btn-danger rounded-pill px-4 mt-3">Order Now</button>
                            </div>
                            </div>
                            </div>
                            </div>
                 
                 )
              })}
              </div>
                </div>
                  </div>
                  
            <div className="position-relative mt-5 pt-5">
                <span className="position-absolute bottom-0 end-0 " >
                  <Image height={100} src={Leaf} className="img-fluid"  alt="img 2"/> </span>
                </div>
  </div>
    )
    
  };
  export default CardComponent