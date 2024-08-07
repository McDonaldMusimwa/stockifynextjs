import Order from "@/app/ui/order/order";

export default function Page() {
  return (<>
    <table className="hidden min-w-full text-gray-900 md:table">
      <thead rounded-lg text-left text-sm font-normal>
      <tr>
        <th scope="col" className="px-3 py-5 font-medium">Order Number</th>
        <th scope="col" className="px-3 py-5 font-medium">Customer Name</th>
        <th scope="col" className="px-3 py-5 font-medium">Date Ordered</th>
        <th scope="col" className="px-3 py-5 font-medium">Quantity Ordered</th>
      </tr>
      </thead>
      <Order />
    </table>
  </>);
}