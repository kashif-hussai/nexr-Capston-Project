import  "./menu.css";


const MenuSection = ( ) =>{
    return(
  <div>
      <div className="margen ">
        <div className="container ">
        <b><h1 className="text-center t-size"> <span className="text-danger">Menu</span> That <span className="t-color">
          Always</span> Make You <br />
         Fall In <span className="text-danger">Love</span></h1></b>
        <div className="space mt-5 pt-5">
        <button type="button" class="btn btn-danger rounded-pill px-3">Ramen</button>
        <button type="button" class="btn btn-outline-secondary  rounded-pill px-3">Breakfast</button>
        <button type="button" class="btn btn-outline-secondary  rounded-pill px-3 ">Lunch</button>
        <button type="button" class="btn btn-outline-secondary  rounded-pill px-3 width">Dinner</button>
        <button type="button" class="btn btn-outline-secondary  rounded-pill px-3 width">Maxican</button>
        <button type="button" class="btn btn-outline-secondary  rounded-pill px-3 width">Italian</button>
        <button type="button" class="btn btn-outline-secondary  rounded-pill px-3 width">Desserts</button>
        <button type="button" class="btn btn-outline-secondary  rounded-pill px-3 width">Drinks</button>
        </div>
      </div>
      </div>
  </div>
    )
    
  };
  export default MenuSection