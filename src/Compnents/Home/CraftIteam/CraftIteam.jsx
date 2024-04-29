

const CraftIteam = ({craftCard}) => {
    console.log(craftCard);
      const  {
        Photo_Url,
        Item_name,price,rating,stockStatus,} = craftCard
    
    return (
        <div className="card w-80 border border-teal-200 bg-teal-50 shadow-xl">
        <figure className="px-4 pt-4">
          <img src={Photo_Url} alt="Shoes" className="rounded-xl h-64 w-56" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{Item_name}</h2>
         
            
              
            <div className="flex ">
               <img src="https://i.postimg.cc/vmpPp7Xp/star-3794158.png" alt="" className="h-4" />
               <p>rating:{rating}</p>
          </div>
          <div className="flex ">
            <img src="https://i.postimg.cc/XvZHH1Kf/ready-stock.png" alt="" className="h-4" />
               <p>stock-Status:{stockStatus}</p>
            </div>
          <div className="card-actions">
            <button className="btn boder border-teal-300 bg-teal-100 text-teal-700">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default CraftIteam;