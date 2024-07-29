export default function InventoryItem(inventory: {
    ProductId: number;
    ProductName: string;
    ProductQuantity: number;
    ProductsCost: number;
    ProductThreshold: string;
}) {
    let availability
    if (inventory.ProductQuantity > 0) {
        availability = "✔️"
    } else {
        availability = "✖"
    }


    return (
        <tr key={inventory.ProductId} className="rounded justify-around p-2 m-2 h-4 text-center border-solid">
            <td>{inventory.ProductId}</td>
            <td>{inventory.ProductName}</td>
            <td>{inventory.ProductQuantity}</td>
            <td>{inventory.ProductsCost}</td>
            <td>{inventory.ProductThreshold}</td>
            <td>{availability}</td>

        </tr>
    )
}