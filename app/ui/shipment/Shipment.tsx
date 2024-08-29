import React from 'react'
interface shipmentInterface {
    shipmentid: string,
    invoicenumber: string,
    suppliername: string,
    notes: string,
    datereceived: string,
    totalproducts: string,
    totalcost: string
}
const Shipment: React.FC<shipmentInterface> = ({ shipmentid, invoicenumber, suppliername, notes, datereceived, totalcost, totalproducts }) => {
    return (
        <tr className="text-left w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{shipmentid}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{invoicenumber}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{suppliername}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{notes}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{datereceived}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{totalproducts}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{totalcost}</td>
           

        </tr>
    )
}

export default Shipment