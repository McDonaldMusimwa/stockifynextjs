import OrderItem from "./orderItem";


export default async function Order() {
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
      
  


    return (<tbody className="bg-white">

        {orders.map(order => {
            return (
                <OrderItem key={order.OrderId} {...order} />
            )
        })}
    </tbody>)
}