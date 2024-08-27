import dbConnect from "@/app/lib/database";
import Supplier from "@/app/models/supplier";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await dbConnect();

    try {
        console.log('Attempting connection to database');
        const result = await Supplier.find();
        console.log('Fetched suppliers:', result);

        return NextResponse.json(result);
    } catch (err: any) {
        console.error('Database Error:', err);
        return NextResponse.json(
            { error: 'An error occurred while fetching suppliers.' },
            { status: 500 }
        );
    }
}
