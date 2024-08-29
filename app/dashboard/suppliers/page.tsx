import Supplier from "@/app/ui/supplier/supplier";
import Search from "@/app/ui/search/Search";
export default async function Page() {

  const sup = [
    { "_id": { "$oid": "652d3d9bb4e78a87ebdfcfe1" }, "supplier": "Forever Colombia", "contactname": "Aaron", "email": "aaron@gmail.com", "phone": "67 020 1621", "adress": "29 Tokyo rd ", "__v": { "$numberInt": "0" } },
    { "_id": { "$oid": "652d416f8a4c355369c7828f" }, "supplier": "ForeverDirect", "contactname": "Jason", "email": "json@gmail.com", "phone": "671033055", "adress": "1 Coach road capetown", "__v": { "$numberInt": "0" } },
    { "_id": { "$oid": "6557513eab7acfd8f73e7daf" }, "supplier": "Forver America", "contactname": "Tom", "email": "tom@forever.co.za", "phone": "0670201621", "adress": "14 Sunclose Ikhwezi park Khayelitsha", "__v": { "$numberInt": "0" } },
    { "_id": { "$oid": "65575493ab7acfd8f73e7f1b" }, "supplier": "Forever Nertherlands", "contactname": "Joshua", "email": "josh@forever.co.za", "phone": "223 67 554 5530", "adress": "14 Sunclose Ikhwezi park Khayelitsha", "__v": { "$numberInt": "0" } },
    { "_id": { "$oid": "655754d3ab7acfd8f73e7f69" }, "supplier": "forver Texas", "contactname": "George", "email": "george@gmail.com", "phone": "0670201621", "adress": "14 Sunclose Ikhwezi park Khayelitsha", "__v": { "$numberInt": "0" } },
    { "_id": { "$oid": "6557525aab7acfd8f73e7db1" }, "supplier": "Forever Colombia", "contactname": "Arnia", "email": "arnia@forever.co.za", "phone": "27681035541", "adress": "14 Sunclose Ikhwezi park Khayelitsha", "__v": { "$numberInt": "0" } }
  ]


  try {
    const result = await fetch('http://localhost:3000/api/supplier')
    const suppliers = await result.json()
    console.log(suppliers)
  } catch (err) {
    throw err
  }
  return <div>
    <div className="mt-4 flex justify-between gap-2 md:mt-8 m-4">
      <Search placeholder="Search supplier..." />
      <select className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <option>Filter</option>
        <option>asc</option>
        <option>desc</option>
      </select>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Export suppliers List

      </button>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Add supplier</button>

    </div>

    <table >
      <thead>
        <tr>
          <th>Supplier</th>
          <th>Contact Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {sup.map((supplier) => {
          return <Supplier
            key={supplier._id.$oid}
            name={supplier.supplier}
            contactname={supplier.contactname}
            email={supplier.email}
            phone={supplier.phone}
            address={supplier.adress} />
        })}
      </tbody>
    </table>
  </div>;
}