import mongoose, { Document, Schema } from 'mongoose';



export interface IShipment extends Document {
  productid: string;
  productname: string;
  productdescription: string;
  quantityreceived: number;
  cost: number;
  totalcost: number;
  expirydate: Date;
  datereceived: Date;
}

export interface IInventoryItem extends Document {
  productId: string;
  productname: string;
  totalquantity: number;
  totalcost: number;
  shipments: IShipment[];
}

const shipmentSchema = new Schema<IShipment>({
  productname: { type: String, required: true },
  productdescription: { type: String, required: true },
  quantityreceived: { type: Number, required: true },
  cost: { type: Number, required: true },
  datereceived: { type: Date, required: true },
  expirydate: { type: Date, required: true }

});

const stockSchema = new Schema<IInventoryItem>({
  productId: { type: String, required: true },
  productname: { type: String, required: true },
  totalquantity: { type: Number, required: true },
  totalcost: { type: Number, required: true },
  shipments: { type: [shipmentSchema] },
});

const stock = mongoose.models.Stock || mongoose.model<IInventoryItem>('stock', stockSchema);

export default stock;