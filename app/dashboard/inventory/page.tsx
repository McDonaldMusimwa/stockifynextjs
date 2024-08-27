import Inventory from "@/app/ui/inventory/inventory";
import InventoryDataCard from "@/app/ui/inventory/inventorydatacard";
//import AddProduct from "@/app/ui/inventory/AddProduct";
import Search from "@/app/ui/search/Search";
export default async function Page() {
  const response = await fetch("http://localhost:3000/api/stock")
  let stock = await response.json();
  //console.log(stock)
  const sortHandler =()=>{
    /*
    if('asc'){
      stock.sort((a,b)=>a.productname.localeCompare(b.productname))

    }else if('desc'){
      stock.sort((a, b) => b.productname.localeCompare(a.productname));
    }
*/
  }

  return (<>
    <InventoryDataCard />
    <div className="mt-4 flex justify-between gap-2 md:mt-8 m-4">
      <Search placeholder="Search invoices..." />
      <select className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <option>Filter</option>
        <option>asc</option>
        <option>desc</option>
      </select>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Export
        
      </button>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Add product</button>

    </div>

    <table className="hidden min-w-full text-gray-900 md:table bg-white">
      <thead rounded-lg text-left text-sm font-normal>
        <tr>
          <th scope="col" className="px-3 py-5 font-medium">Product ID</th>
          <th scope="col" className="px-3 py-5 font-medium">Product Name</th>
          <th scope="col" className="px-3 py-5 font-medium">Quantity</th>
          <th scope="col" className="px-3 py-5 font-medium">Product Cost</th>
          <th scope="col" className="px-3 py-5 font-medium">Threshold</th>
          <th scope="col" className="px-3 py-5 font-medium">Availability</th>
        </tr>
      </thead>
      <Inventory stock={stock} />
    </table>
  </>);
}