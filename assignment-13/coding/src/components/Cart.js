import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

console.log("ItemList" ,ItemList);

const Cart =() =>{
    const cartItems = useSelector((store) => store.cart.items);
    console.log("cartItems",cartItems);
    const dispatch =useDispatch();
    const handleClearCart =() =>{
        dispatch(clearCart())
    }

    return (
    <div className="text-center w-1/2 m-auto">
        <h1 className="font-bold m-5">Cart</h1>
        <div>
            <button className="p-2 m-2 bg-black text-white rounded-lg text-right"onClick={handleClearCart}> clear Cart</button>
            {cartItems.length===0 && ( <h1>your cart is empty .add Items to the cart</h1>)}
            <ItemList items={cartItems} />
        </div>
    </div>)
}
export default Cart;