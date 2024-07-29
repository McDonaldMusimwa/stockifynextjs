import InventoryItem from "./inventoryItem"


export default async function Inventory() {
  const inventories =  [
    {
      ProductId: 20,
      ProductName: "Tooth Paste",
      ProductQuantity: 23,
      ProductsCost: 725,
      ProductThreshold: "10 cases"
    },
    {
      ProductId: 40,
      ProductName: "Pro biotic",
      ProductQuantity: 37,
      ProductsCost: 1200,
      ProductThreshold: "10 cases"
    },
    {
      ProductId: 15,
      ProductName: "Aloe vera gelly",
      ProductQuantity: 5,
      ProductsCost: 50,
      ProductThreshold: "10 cases"
    },
    {
      ProductId: 14,
      ProductName: "Aloe moisturising lotion",
      ProductQuantity: 10,
      ProductsCost: 120,
      ProductThreshold: "10 cases"
    },
    {
      ProductId: 10,
      ProductName: "Aloe Lips",
      ProductQuantity: 10,
      ProductsCost: 50,
      ProductThreshold: "10 cases"
    },
    {
      ProductId: 62,
      ProductName: "Aloe heat lotion",
      ProductQuantity: 0,
      ProductsCost: 0,
      ProductThreshold: "10 cases"
    }
  ];
  


    return (<>

        {inventories.map(inventory => {
            return (
                <InventoryItem key={inventory.ProductId} {...inventory} />
            )
        })}
    </>)
}