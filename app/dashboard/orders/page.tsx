import Order from "@/app/ui/order/order";
import Search from "@/app/ui/search/Search";
import InventoryDataCard from "@/app/ui/inventory/inventorydatacard";

export default async function Page() {

  const orders = [
    {
      OrderId: 1,
      CustomerName: "John Doe",
      DateOrdered: "2024-08-01",
      NumberOfProductsOrdered: 100,
    },
    {
      OrderId: 2,
      CustomerName: "Jane Smith",
      DateOrdered: "2024-08-02",
      NumberOfProductsOrdered: 150,
    },
    {
      OrderId: 3,
      CustomerName: "Acme Corp",
      DateOrdered: "2024-08-03",
      NumberOfProductsOrdered: 200,
    },
    {
      OrderId: 4,
      CustomerName: "SuperMart",
      DateOrdered: "2024-08-04",
      NumberOfProductsOrdered: 300,
    },
    {
      OrderId: 5,
      CustomerName: "Tech Solutions",
      DateOrdered: "2024-08-05",
      NumberOfProductsOrdered: 250,
    },
    {
      OrderId: 6,
      CustomerName: "Green Grocers",
      DateOrdered: "2024-08-06",
      NumberOfProductsOrdered: 120,
    },
    {
      OrderId: 7,
      CustomerName: "Household Essentials",
      DateOrdered: "2024-08-07",
      NumberOfProductsOrdered: 180,
    },
    {
      OrderId: 8,
      CustomerName: "BestBooks",
      DateOrdered: "2024-08-08",
      NumberOfProductsOrdered: 90,
    },
    {
      OrderId: 9,
      CustomerName: "Sporting Goods Inc.",
      DateOrdered: "2024-08-09",
      NumberOfProductsOrdered: 500,
    },
    {
      OrderId: 10,
      CustomerName: "Luxury Linens",
      DateOrdered: "2024-08-10",
      NumberOfProductsOrdered: 75,
    }
  ];


  try {
    // Fetch the data from the API
    const response = await fetch("http://localhost:3000/api/order")
   
    // Check if the response is OK (status code 2xx)
    if (!response.ok) {
      console.log('Error==>')
      throw new Error(`HTTP error! status: ${response.status}`);
      
    }
    // Parse the response as JSON
    const order = await response.json();
 
    // Do something with the order data
    console.log('Order Data:', order);
  } catch (error) {
    // Handle errors, e.g., network issues, non-JSON response, etc.
    console.error('Fetch error:', error);
  }



  return (<>

    <InventoryDataCard />
    <div className="mt-4 flex justify-between gap-2 md:mt-8 m-4">
      <Search placeholder="Search orders..." />
      <select className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <option>Filter</option>
        <option>asc</option>
        <option>desc</option>
      </select>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Export

      </button>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Add order</button>

    </div>

    <table className="hidden min-w-full text-gray-900 md:table">
      <thead rounded-lg text-left text-sm font-normal>
        <tr>
          <th scope="col" className="px-3 py-5 font-medium">Order Number</th>
          <th scope="col" className="px-3 py-5 font-medium">Customer Name</th>
          <th scope="col" className="px-3 py-5 font-medium">Date Ordered</th>
          <th scope="col" className="px-3 py-5 font-medium">Quantity Ordered</th>
        </tr>
      </thead>

      <Order orders={orders} />
    </table>

  </>);
}