import mongoose, { Document,Schema } from 'mongoose';

export interface IProduct extends Document{
    productid: string;
    productname: string;
    quantityreceived: number;
    cost: number;
    totalcost: number;
    expirydate: Date;
}

export interface IShipmentReceived extends Document{
    invoicenumber: string;
    datereceived: Date; // Corrected from String to Date
    suppliername: string;
    shipmentdescription: string;
    totalreceived: number;
    totalcost: number;
    products: IProduct[];
}

const productSchema = new Schema<IProduct>({
    productid:{type:String,required:true},
    productname: {type:String,required:true},
    quantityreceived: {type:Number,required:true},
    cost: {type:Number,required:true},
    totalcost:{ type:Number,required:true},
    expirydate:{type: Date,required:true}
});

const shipmentSchema = new Schema<IShipmentReceived>({
    invoicenumber: {type:String,required:true},
    datereceived: {type:Date,required:true}, // Corrected from String to Date
    suppliername: {type:String,required:true},
    shipmentdescription: {type:String,required:true},
    totalreceived: {type:Number,required:true},
    totalcost: {type:Number,required:true},
    products:{type:[productSchema]},
});

const shipment = mongoose.model<IShipmentReceived>('Shipment', shipmentSchema, 'shipments');

export default shipment;