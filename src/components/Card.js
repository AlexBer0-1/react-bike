
export const Card  = (props) =>  {
    const { name, price, onClick } = props

    return ( 
        <div className="card">
    <div className="favorite">
    <img   width={25} height={25} src="/img/unlike.png" alt="unlike"/>
    </div>
         <img width={200} height={300} src  = "/img/bike1.png" /> 

         {name}
         <div className="cardButtom">
        <div>
                  <span>  Цена: </span>
                  {price}
            </div>
            <button className="button" onClick={onClick}   >
              <img src="ПЛЮС " alt="" />
            </button>
         </div>
      </div>
    )
}
