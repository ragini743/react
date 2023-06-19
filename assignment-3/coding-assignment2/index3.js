import React from "react"
import ReactDOM from "react-dom/client"

const Container =() =>(
    
    <React.Fragment>
        <div  className="container">
          <div className="logo">
            <img src="https://www.namasteui.com/wp-content/uploads/2021/07/Reactjs-768x427.jpg"></img>
          </div>
          <div className="user-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png">
                        
            </img>
          </div> 
        </div>
         <input type="text"></input>
        
    </React.Fragment>
)

const parent=ReactDOM.createRoot(document.querySelector(".parent"))
parent.render(<Container />)