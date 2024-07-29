import TopProduct from "./top-product"

export default function TopProducts() {

    return (

        <div className="mt-2 col-span-2 bg-white w-full h-100">
            <span className="flex justify-between p-2"> 
            <h4>Top products</h4>
            <span>See All</span>
            </span>
            <TopProduct />
        </div>




    )
}