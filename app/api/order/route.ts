import dbConnect from "@/app/lib/database";
import order from "@/app/models/order";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await dbConnect()
    try {
        console.log('attempting to retrive orders')
        const result = await order.find();
        return NextResponse.json({ success: true, data: result });
    } catch (err) {
        return NextResponse.json({ success: false, message: 'Error fetching data' }, { status: 500 });
    }
}
