import {itemCard_URL} from "../utils/constants"
const ItemList =({items,dummy}) =>{
    console.log("items" ,items)
    console.log("dummy",dummy)
    return(
        <div>
            { items.map((item) => (
              <div key ={item.card.info.id}>
                <div className="flex justify-between items-center mb-6 border-b-4">
                    <div className="text-left w-3/4">
                    <span>{item.card.info.name}</span>
                    <span className="ml-6"> - ₹{item.card.info.price/100}</span>
                    <p className="font-light">{item.card.info.description}</p>
                    </div>
                    <div className="w-2/12 p-4 h-32"><img className="w-full h-full object-cover" src={itemCard_URL+item.card.info.imageId}></img>
                    <div clsssName="absolute w-full p-4">
                    <button className=" relative text-white bg-slate-400 font-bold
                     bottom-4 w-full shadow-lg">Add +</button>
                    </div>
                    </div>
                </div>
              </div>
             ))}

        </div>

    )
}

export default ItemList