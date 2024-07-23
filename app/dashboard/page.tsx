import CardWrapper from "../ui/dashboard/card";
import RevenueChart from "../ui/dashboard/revenuechart";
import TopProducts from "../ui/dashboard/topproducts";

export default function Page() {
  return <>
    <CardWrapper />
    <div className="grid gap-2 grid-cols-6">

      <RevenueChart />
      <TopProducts />
    </div>

  </>;
}