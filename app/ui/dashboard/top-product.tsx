import Image from 'next/image';
export default function TopProduct() {



    const products = [
        {
            product: "Aloe Gel",
            description: "330ml mini aloe vera",
            price: 130,
            image: '/topselling/aloe_gel_mini.avif'
        },
        {
            product: "Multivitamin Tablets",
            description: "40 tablets ",
            price: 430,
            image: '/topselling/forever_kids.avif'
        },
        {
            product: "Aloe Tooth Gel",
            description: "100ml aloe/honey toothgel",
            price: 170,
            image: '/topselling/forever_bright.webp'
        },
        {
            product: "Aloe Gellie",
            description: "100ml tube aloe",
            price: 370,
            image: '/topselling/aloe_gelly.webp'
        }

    ]
    return (<>
        {
            products.map((product) => {
                return (
                    <div className="border rounded-lg p-4 w-60 h-20 shadow-lg flex">
                        <Image src={product.image} alt={product.product} width={50} height={50}  />
                        <div className="space-y-2">
                            <p className="text-xs font-semibold">{product.product}</p>
                            <p className="text-gray-600">{product.description}</p>
                            
                        </div>
                        <p className="text-xs font-bold">R {product.price}.00</p>
                    </div>
                )
            })

        }

    </>)
}