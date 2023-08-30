import  "./menu.css";


const MenuSection = ( ) =>{
    return(
  <div>
      <div>
        <div className="container">
        <h2 className="text-center"> Menu That Always Make You <br /> Fall In Love</h2>
        <div className="space">
        <button type="button" class="btn btn-danger rounded-pill px-4">Ramen</button>
        <button type="button" class="btn btn-outline-secondary  rounded-pill px-4">Breakfast</button>
        <button type="button" class="btn btn-outline-secondary  rounded-pill px-4">Lunch</button>
        <button type="button" class="btn btn-outline-secondary  rounded-pill px-4">Dinner</button>
        <button type="button" class="btn btn-outline-secondary  rounded-pill px-4">Maxican</button>
        <button type="button" class="btn btn-outline-secondary  rounded-pill px-4">Italian</button>
        <button type="button" class="btn btn-outline-secondary  rounded-pill px-4">Desserts</button>
        <button type="button" class="btn btn-outline-secondary  rounded-pill px-4">Drinks</button>
        </div>
      </div>
      </div>
  </div>
    )
    
  };
  export default MenuSection