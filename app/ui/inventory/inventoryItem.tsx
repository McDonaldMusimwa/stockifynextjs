interface InventoryItemProp {
    productId: number;
    productname: string;
    totalquantity: number;
    totalcost: number;
    ProductThreshold: string;
}
const InventoryItem: React.FC<InventoryItemProp> = ({ productId, productname, totalcost, totalquantity, ProductThreshold }) => {
    let availability
    if (totalquantity > 0) {
        availability = "✔️"
    } else {
        availability = "✖"
    }


    return (
        <tr key={productId} className="text-left w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{productId}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{productname}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{totalquantity}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{totalcost}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">10</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{availability}</td>

        </tr>
    )
}

export default InventoryItem