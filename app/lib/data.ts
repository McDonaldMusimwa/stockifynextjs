import { NextRequest, NextResponse } from 'next/server';
import { Order } from '../models/order';
//import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDataBase } from './database/database';

/*
async function getAllOrders(req: NextRequest, res: NextResponse): Promise<void> {
    //#swagger.tags=['Order']
   await connectToDataBase()
    try {
      const orders = await Order.find(); // Use 'await' to handle the asynchronous operation
      res.status(200).json(orders ); // Correct the 'messsage' typo and include the 'orders'
    } catch (error) {
      res.status(401).json({ message: error.message }); // Include the error message in the response
    }
  }
*/