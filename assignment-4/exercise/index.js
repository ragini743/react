import React from "react"
import ReactDOM from "react-dom/client"

//for header

const Header=() =>{
    return (
        <div className="header">
            <div className="div">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" className="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

//creating dynamically website with props

// const RestaurantCard =(props) =>{
//     return(
//         <div className= "res-card" style={{backgroundColor: "#dad4d4"}}>
//             <img className= "res-logo" src={props.resLink}></img>
//             <h3>{props.resName}</h3>
//             <h4>{props.cuizine}</h4>
//             <div className="ratingTime">
//                  <span className="rating" style={{backgroundColor: "green",color:"white" ,textAlign:"right"}}>{props.ratings}</span>
//                   <span className="time"> {props.timing}</span>
//             </div>
//         </div>
//     )
// }

const Body =() =>{
    return(
       <div className= "body">
        <div className="search">search</div>
        <div className= "res-container">
            <RestaurantCard 
              resLink="https://b.zmtcdn.com/data/pictures/7/2400327/9ba139e1507f8d5c4c868e2ddd667a79_o2_featured_v2.jpg?output-format=webp"
              resName="Mahima Restaurant"
              cuizine="North indian"
              ratings="3.9*"
              timing="26 min"      
            />
            <RestaurantCard
            resLink="https://b.zmtcdn.com/data/pictures/1/2400041/e6f4395d36402a9103a7f87e7fedb1d5_o2_featured_v2.jpg?output-format=webp"
            resName="Nidhi Restaurant"
            cuizine="North indian, south indian"
            ratings="4.1*"
            timing="32 min"
            />
        </div>
       </div> 
    )
}

//another method with data structuring
//{resLink ,resName ,cuizine ,ratings,timing} = props
const RestaurantCard = ( {resLink ,resName ,cuizine ,ratings ,timing} ) => {
    return(
        <div className= "res-card" style={{backgroundColor: "#dad4d4"}}>
            <img className= "res-logo" src={resLink}></img>
            <h3>{resName}</h3>
            <h4>{cuizine}</h4>
            <div className="ratingTime">
                 <span className="rating" style={{backgroundColor: "green",color:"white" ,textAlign:"right"}}>{ratings}</span>
                  <span className="time"> {timing}</span>
            </div>
        </div>
    )
}






const AppLayout=() =>{
    return <div className= "app">
        <Header />
        <Body />
    </div>
}

const root=ReactDOM.createRoot(document.querySelector(".root"))
root.render(<AppLayout />)