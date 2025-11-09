



export const Cart = (props) => {
    const {cart,onDelete, onClose } = props
    return(
        <div className="overlay">
        <div className="drawer">

{/* <button className="closeButton" onClick={onClose} /> */}
  <button className="closeButton" onClick={onClose}>✖</button>
          <h2>Корзина</h2>


          {cart.map((bike) => { 
            return( <div className="cartItem" >
            <img width={60} height={60} src  = "/img/logo.png" />

          <div>
          <p> {bike.name}   </p>
          <b> {bike.price}    </b>


             </div>
             <img className="removeButton" width={20} height={20} src  = "/img/krest.png" alt="крестик" onClick={() => onDelete(bike.id) } />
          </div>

            )
          })}   
          <div className="cartTotalBlock">
           <ul >
              <li>
            <span> ИТОГО:  </span>

            <div>  </div>
            <b> 1000000000 </b>
             </li>
                <li>
              <span>  Налог 8% </span>

            <div>  </div>
            <b> 10000%  </b>

  
                </li>



           </ul>


         


       
<button> Оформить заказ   </button>
            </div>
        </div>
      </div>
    )
}