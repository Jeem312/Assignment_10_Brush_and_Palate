

const CraftIteam = ({craftCard}) => {
    console.log(craftCard);
      const  {
        Photo_Url,
        Item_name,price,rating,stockStatus,} = craftCard
    
    return (
      <div className="max-w-xs p-6 border border-teal-400 my-6 ml-6 md:ml-20 rounded-md shadow-md  dark:bg-gray-50 dark:text-gray-900">
      <img src={Photo_Url} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
    

      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{Item_name}</span>
      </div>
      <div className="flex ">
               <img src="https://i.postimg.cc/vmpPp7Xp/star-3794158.png" alt="" className="h-4" />
               <p>rating:{rating}</p>
          </div>
          <div className="flex ">
            <img src="https://i.postimg.cc/XvZHH1Kf/ready-stock.png" alt="" className="h-4" />
               <p>stock-Status:{stockStatus}</p>
            </div>
            <div className="flex justify-center items-center">
            <button className="btn boder border-teal-300 bg-base-200 text-teal-700">View Details</button></div>

      </div>
    );
};

export default CraftIteam;