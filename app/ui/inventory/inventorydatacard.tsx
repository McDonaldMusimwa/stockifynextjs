import React from 'react'
const cardstyle = "block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
const InventoryDataCard = () => {
    return (
        <div className='flex justify-between'>
            <ProductRange num={10} />
            <TotalProducts count={80} cost={107000} />
            <LowStock lowstock={5} />
        </div>
    )
}

const ProductRange = (props: { num: number }) => {
    return (<div className={`${cardstyle}`}>
        <span>Product Range</span>
        <p>{props.num}</p>
    </div>)
}
const TotalProducts = (props: { count: number, cost: number }) => {
    return (<div className={`${cardstyle}`}>
        <span>Total Product</span>
        <table>
        <thead>
            <tr>
                <th>Cases</th>
                <th>Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{props.count}</td>
                <td>R {props.cost}.00</td>
            </tr>
        </tbody>
    </table>

    </div>)
}
const LowStock = (props: { lowstock: number }) => {
    return (<div className={`${cardstyle}`}>
        <span>Low Stock</span>
        <p>{props.lowstock}</p>
    </div>)
}

export default InventoryDataCard