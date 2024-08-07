import InventoryItem from "./inventoryItem"
export interface Product {
  productname: string;
  productId: number;
  totalquantity: number;
  totalcost:number,
  shipments:[]
}

export default async function Inventory({stock }) {


  return (<tbody className="bg-white">

    {stock.map(inventory  => {
      return (
        <InventoryItem key={inventory.productId} {...inventory} />
      )
    })}
  </tbody>)
}