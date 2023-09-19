import ItemList from "./ItemList" ;

const RestaurantCategory = ({data}) => {
    console.log("data",data)
  return (
    <div>
      {/* Header */}
      <div className="items-center my-4 shadow-lg  rounded-xl mx-auto w-2/4 p-4 ">
        <div className="justify-between flex">
        <span className="font-bold text-lg">
            {data.title}
        </span>

        <span className="h-3.5 w-3.5  border-t-0 border-b-4 border-r-4 border-l-0 flex border-gray-500 rotate-45 " >
         
        </span>
      </div>
      <ItemList items={data.itemCards} />
      </div>
      {/* accordian body
       */}
    </div>
  );
};

export default RestaurantCategory;
