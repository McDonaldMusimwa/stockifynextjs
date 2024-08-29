import Search from "@/app/ui/search/Search";
import Shipment from "@/app/ui/shipment/Shipment";
export default function Page() {
  const shipment = [
    { "_id": { "$oid": "65524d4ff1d496b66d02d1d6" }, "invoicenumber": "4550", "datereceived": { "$date": { "$numberLong": "1699740000000" } }, "suppliername": "Forver Direct", "shipmentdescription": "Arrived via Mozambique port", "totalreceived": { "$numberInt": "20" }, "totalcost": { "$numberInt": "275" }, "products": [{ "productid": "40", "productname": "Pro biotic", "quantityreceived": { "$numberInt": "15" }, "cost": { "$numberInt": "30" }, "totalcost": { "$numberInt": "450" }, "expirydate": { "$date": { "$numberLong": "1755036000000" } }, "_id": { "$oid": "65524d4ff1d496b66d02d1d7" } }, { "productid": "20", "productname": "Tooth gel", "quantityreceived": { "$numberInt": "5" }, "cost": { "$numberInt": "25" }, "totalcost": { "$numberInt": "125" }, "expirydate": { "$date": { "$numberLong": "1755036000000" } }, "_id": { "$oid": "65524d4ff1d496b66d02d1d8" } }], "__v": { "$numberInt": "0" } },
    { "_id": { "$oid": "6557a42f12a9b87105ea244e" }, "invoicenumber": "f70", "datereceived": { "$date": { "$numberLong": "1700265600000" } }, "suppliername": "Forever Direct", "shipmentdescription": "VIA MOZAMBIQUE", "totalreceived": { "$numberInt": "20" }, "totalcost": { "$numberInt": "200" }, "products": [{ "productid": "20", "productname": "Forever toothgel", "quantityreceived": { "$numberInt": "10" }, "cost": { "$numberInt": "20" }, "totalcost": { "$numberInt": "100" }, "expirydate": { "$date": { "$numberLong": "1767139200000" } }, "_id": { "$oid": "6557a42f12a9b87105ea244f" } }, { "productid": "40", "productname": "Pro Biotic", "quantityreceived": { "$numberInt": "10" }, "cost": { "$numberInt": "20" }, "totalcost": { "$numberInt": "100" }, "expirydate": { "$date": { "$numberLong": "1763942400000" } }, "_id": { "$oid": "6557a42f12a9b87105ea2450" } }], "__v": { "$numberInt": "0" } },
    { "_id": { "$oid": "655c57e5f3aba233af24dbca" }, "invoicenumber": "d700", "datereceived": { "$date": { "$numberLong": "1698192000000" } }, "suppliername": "Forever Direct", "shipmentdescription": "Via Durban port", "totalreceived": { "$numberInt": "47" }, "totalcost": { "$numberInt": "805" }, "products": [{ "productid": "15", "productname": "Aloe vera gelly", "quantityreceived": { "$numberInt": "5" }, "cost": { "$numberInt": "10" }, "totalcost": { "$numberInt": "50" }, "expirydate": { "$date": { "$numberLong": "1729814400000" } }, "_id": { "$oid": "655c57e5f3aba233af24dbcb" } }, { "productid": "14", "productname": "Aloe moisterizing lotion", "quantityreceived": { "$numberInt": "10" }, "cost": { "$numberInt": "12" }, "totalcost": { "$numberInt": "120" }, "expirydate": { "$date": { "$numberLong": "1729814400000" } }, "_id": { "$oid": "655c57e5f3aba233af24dbcc" } }, { "productid": "10", "productname": "Aloe lips", "quantityreceived": { "$numberInt": "10" }, "cost": { "$numberInt": "5" }, "totalcost": { "$numberInt": "50" }, "expirydate": { "$date": { "$numberLong": "1761350400000" } }, "_id": { "$oid": "655c57e5f3aba233af24dbcd" } }, { "productid": "20", "productname": "Forever toothgel", "quantityreceived": { "$numberInt": "15" }, "cost": { "$numberInt": "25" }, "totalcost": { "$numberInt": "375" }, "expirydate": { "$date": { "$numberLong": "1729814400000" } }, "_id": { "$oid": "655c57e5f3aba233af24dbce" } }, { "productid": "40", "productname": "Pro Biotic", "quantityreceived": { "$numberInt": "7" }, "cost": { "$numberInt": "30" }, "totalcost": { "$numberInt": "210" }, "expirydate": { "$date": { "$numberLong": "1729814400000" } }, "_id": { "$oid": "655c57e5f3aba233af24dbcf" } }, { "productid": "20", "productname": "shoes", "quantityreceived": { "$numberInt": "0" }, "cost": { "$numberInt": "0" }, "totalcost": { "$numberInt": "0" }, "expirydate": { "$date": { "$numberLong": "973900800000" } }, "_id": { "$oid": "655c57e5f3aba233af24dbd0" } }], "__v": { "$numberInt": "0" } }
  ]
  const months = ["Choose",
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return <div>Shipments Page

    <div className="mt-4 flex justify-between gap-2 md:mt-8 m-4">
      <Search placeholder="Search invoices..." />
      <select className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        {months.map((month) => <option>{month}</option>)}
      </select>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Export

      </button>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Add shipment</button>

    </div>
    <table className="hidden min-w-full text-gray-900 md:table bg-white">
      <thead rounded-lg text-left text-sm font-normal>
        <tr>
          <th scope="col" className="px-3 py-5 font-medium">Shipment ID</th>
          <th scope="col" className="px-3 py-5 font-medium">Invoice Number</th>
          <th scope="col" className="px-3 py-5 font-medium">Supplier Name</th>
          <th scope="col" className="px-3 py-5 font-medium">Description</th>
          <th scope="col" className="px-3 py-5 font-medium">Date Received</th>
          <th scope="col" className="px-3 py-5 font-medium">Total cases</th>
          <th scope="col" className="px-3 py-5 font-medium">Total Cost</th>
        </tr>
      </thead>
      <tbody>
        {shipment.map((shipment) => {
          return <Shipment totalcost={shipment.totalcost.$numberInt} key={shipment._id.$oid} notes={shipment.shipmentdescription} totalproducts={shipment.totalreceived.$numberInt} suppliername={shipment.suppliername} shipmentid={shipment._id.$oid} invoicenumber={shipment.invoicenumber} datereceived={shipment.datereceived.$date.$numberLong} />
        })}
      </tbody>

    </table>
  </div>;
}