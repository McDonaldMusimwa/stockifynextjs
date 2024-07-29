import Image from 'next/image';
export default function TopProduct() {



    const products = [
        {
            product: "Aloe Gel",
            description: "330ml mini aloe vera",
            price: 130,
            image: '/topselling/aloe_gel_mini.avif',
            key:1
        },
        {
            product: "Multivitamin Tablets",
            description: "40 tablets ",
            price: 430,
            image: '/topselling/forever_kids.avif',
            key:2
        },
        {
            product: "Aloe Tooth Gel",
            description: "100ml aloe/honey toothgel",
            price: 170,
            image: '/topselling/forever_bright.webp',
            key:3
        },
        {
            product: "Aloe Gellie",
            description: "100ml tube aloe",
            price: 370,
            image: '/topselling/aloe_gelly.webp',
            key:4
        }

    ]
    return (<>
        {
            products.map((product) => {
                return (
                    <div className="border rounded-lg p-2 w-100 h-15 shadow-lg flex justify-between" key={product.key}>
                        <Image src={product.image} alt={product.product} width={50} height={50}  />
                        <div className="space-y-2 text-center">
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