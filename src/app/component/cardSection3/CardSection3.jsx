import Image from "next/image";
import img1 from "../../assets/images/m1s.svg"
import starImage from "../../assets/images/burger1.svg"
import star from "../../assets/images/starIcon.svg"
import chicken1 from "../../assets/images/burger2.svg"
import chicken2 from "../../assets/images/burger3.svg"
import chicken3 from "../../assets/images/burger4.svg"
import price from "../../assets/images/$1.svg"
import  "./card.css";




const CardSection3 = ( props) =>{
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
        immageUrl1: img1 ,
        immageUrl4: price ,
        immageUrl2: chicken1 ,
        immageUrl3: star ,
        Ratting: "(4.5)",
        heading: "Kebab",
        paragraph : "Lorem Ipsum is simply dummy  text of the printing and  typesetting industry"
      },
      {
        immageUrl1: img1 ,
        immageUrl4: price ,
        immageUrl2: chicken2 ,
        immageUrl3: star ,
        Ratting: "(4.5)",
        heading: "Kebab",
        paragraph : "Lorem Ipsum is simply dummy  text of the printing and  typesetting industry"
      },
      {
        immageUrl1: img1 ,
        immageUrl4: price,
        immageUrl2: chicken3,
        immageUrl3: star ,
        Ratting: "(4.5)",
        heading: "Kebab",
        paragraph : "Lorem Ipsum is simply dummy  text of the printing and  typesetting industry"
      },
    ]


         return(
             <div>
                 <div>
            <div className="container padding">
                  <div className="row  ">
          


              {data.map((item)=>{
                 return(
              
                  <div className="col-md-3 position-relative">
                    <div className={item.cardStyle }>
                  <div className="imgP d-flex justify-content-center "><Image src={item.immageUrl2} className="img-fluid"  alt="img 2"/> </div>
                  <div className="position-absolute possition"> <Image src={item.immageUrl4}alt=""/> </div>
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
                            </div>
                 
                 )
              })}
              </div>
            </div>
            </div>
                  </div>
                  
           )
    
             };
             export default CardSection3