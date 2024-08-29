import React from 'react'
interface SupplierProps {
    name: string;
    contactname: string;
    email: string;
    phone: string;
    address: string;
}
const Supplier: React.FC<SupplierProps> = ({ name, contactname, email, phone, address }) => {
    return (
        <tr className="text-left w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg" >
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{name}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{contactname}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{email}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{phone}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">{address}</td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex space-x-2">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </td>

        </tr>
    )
}

export default Supplier