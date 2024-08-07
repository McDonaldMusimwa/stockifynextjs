export default function OrderItem(order: {
    OrderId: number;
    CustomerName: string;
    DateOrdered: string;
    NumberOfProductsOrdered: number;
}) {


    return (
        <tr key={order.OrderId} className="text-center w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{order.OrderId}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{order.CustomerName}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{order.DateOrdered}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{order.NumberOfProductsOrdered}</td>
    

        </tr>
    )
}