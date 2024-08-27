import OrderItem from "./orderItem";


export default async function Order({orders}) {



    return (<tbody className="bg-white">

        {orders.map(order => {
            return (
                <OrderItem key={order.OrderId} {...order} />
            )
        })}
    </tbody>)
}