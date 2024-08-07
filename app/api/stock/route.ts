import dbConnect from "@/app/lib/database";
import stock from "@/app/models/stockItem";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    await dbConnect();

    try {
        const result = await stock.find();
        
        const resultData = result.map((product: any) => {
            const totalQuantity = product.shipments.reduce((total: number, shipment: any) => {
                return total + shipment.quantityreceived;
            }, 0);

            const totalCost = product.shipments.reduce((total: number, shipment: any) => {
                return total + shipment.totalcost;
            }, 0);

            return {
                productID: product.productId,
                productName: product.productname,
                totalQuantity: totalQuantity,
                totalCost: totalCost,
                shipments: product.shipments
            };
        });

        return NextResponse.json(resultData);
    } catch (err: any) {
        console.error('Database Error:', err);
        return NextResponse.json(err)
    }
}