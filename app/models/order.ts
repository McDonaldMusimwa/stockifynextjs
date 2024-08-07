import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IProductItem {
    productId: string;
    productname: string;
    quantity: number;
}

export interface IOrder {
    customername: string;
    dateordered: Date;
    customerphone:string
    customeremail:string,
    products: IProductItem[]
}


const productSchema = new Schema<IProductItem>({
    productId:{type: String,required:true},
    productname:{type:String,required:true},
    quantity: {type:Number,required:true}
});

const orderSchema = new Schema<IOrder>({
    customername:{type:String,required:true},
    dateordered: {type:Date,required:true},
    customerphone:{type:String,required:true},
    customeremail:{type:String},
    products: {type:[productSchema]},
});



const order = mongoose.model<IOrder>('order', orderSchema);

export default order;