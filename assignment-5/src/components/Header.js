
import {LOGO_URL} from "../utils/constants"


export const Header=() =>{

    return (
        <div className="header">
            <div className="div">
                <img className="logo"src={LOGO_URL}>

                </img>
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

