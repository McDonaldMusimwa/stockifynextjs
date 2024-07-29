import Inventory from "@/app/ui/inventory/inventory";

export default function Page() {
  return (<>
    <table className="w-full table-auto bg-white p-2">
      <tr>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Product Cost</th>
        <th>Threshold</th>
        <th>Availability</th>
      </tr>

      <Inventory />
    </table>
  </>);
}