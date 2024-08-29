import InventoryItem from "./inventoryItem"
export interface Product {
  productname: string;
  productId: number;
  totalquantity: number;
  totalcost:number,
  shipments:[]
}

const Inventory : React.FC<Product>=({stock })=> {


  return (<tbody className="bg-white">

    {stock.map(inventory  => {
      return (
        <InventoryItem key={inventory.productId} {...inventory} />
      )
    })}
  </tbody>)
}

export default Inventory