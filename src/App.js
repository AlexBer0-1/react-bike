import { useState } from "react";
import { Cart } from "./Cart";
import {Card} from './components/Card';

const Bikes = [
  {
    name: 'meteor',
    price: 9999 ,
    id: 1,
    type: 'mountin',
  },

  {
    name: 'starter',
    price: 19999 ,
    id: 2,
    type: 'city',
  },

  {
    name: 'goida',
    price: 29999 ,
    id: 3,
    type: 'mountin',
  },

  {
    name: 'sasha',
    price: 39999 ,
    id: 4,
    type: 'city',
  },
]



function App() {

const [cart, setcart] = useState([])

const [isCartOpen, setisCartOpen] = useState(false)

  const [bikeType, setBikeType] = useState( 'all' )

  const [showFilter, setShowFilter] = useState(false); 

  // const filteredBikes = Bikes.filter(bike  => bike.type === bikeType)
  const filteredBikes = Bikes.filter(bike  => {
    if (bikeType == "all") {return bike}
    return bike.type === bikeType
  })

  const handleDelete = (id) => {
    const newCart = cart.filter(item => item.id != id)
    setcart(newCart)  
  }
  return (
    <div className="wrapper  ">



{isCartOpen && <Cart cart = {cart} onDelete =  {handleDelete}  > </Cart> } 
    

    



      <header>
    <div className="headerLeft">    
      <img width={60} height={60} src  = "/img/logo.png" />
      <div className="headerInfo">
            <h3> React BIKE </h3>
            <p>Луший магазин велосипедов</p> 
          
      </div>
    </div>  
      <ul className="headerRight">

     <li> <img width={38} height={38} src  = "/img/cors.png" onClick={() => setisCartOpen(true) } />  <span> {cart.reduce((acc,item) => acc + item.price,0 ) } руб. </span> </li>
     <li>
      <img width={38} height={38} src  = "/img/unit.png" />
     </li>


      </ul>

      </header>
      <div className="content" > 
      <h1> Все велосипеды </h1>

      <div className="search-block"> 
        <img width={43} height={43} src="/img/Search.png" alt="Search"/>
        <input placeholder="Поиск...."></input>

      </div>

      ...................... 

      Кнопка фильтра 
 <div className="filter">
          <button
            className="filterButton"
            onClick={() => setShowFilter(!showFilter)}
          >
            Фильтр по типу
          </button>

          {showFilter && (
            <div className="filterMenu">
              <button onClick={() => setBikeType("all")}>Все</button>
              <button onClick={() => setBikeType("mountin")}>Горные</button>
              <button onClick={() => setBikeType("city")}>Городские</button>
            </div>
          )}
        </div>



...................
      
 <div className="bikes">

{ filteredBikes.map((bike) => (

  <Card name= {bike.name}  price= {bike.price} onClick = {() => setcart([...cart, bike])   } />
  
 
) )  }

     
      

      

      



    
      
      

</div>


























































































      
      </div>
    </div>
  );
}

export default App;

