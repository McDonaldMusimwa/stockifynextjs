import TopProduct from "./top-product"

export default function TopProducts() {

    return (

        <div className="flex-col col-span-1 bg-white mt-2 w-full">
            <h4>Top products</h4>
            <span>See All</span>
            <TopProduct />
        </div>




    )
}