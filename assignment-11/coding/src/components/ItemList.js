import {itemCard_URL} from "./src/components/ItemList.js"
const ItemList =({items}) =>{
    console.log("items" ,items)
    return(
        <div>
            { items.map((item) => (
              <div key ={item.card.info.id}>
                <div>
                    <span>{item.card.info.name}</span>
                    <span>{item.card.info.price/100}</span>
                    <p>{item.card.info.description}</p>
                    <div><img src={itemCard_URL+item.carrd.info.imageId}></img></div>
                </div>
              </div>
             ))}

        </div>

    )
}

export default ItemList