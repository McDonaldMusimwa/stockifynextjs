import mongoose, { Document, Schema } from 'mongoose';




export interface IProductItem extends Document {
    productid: string;
    productname: string;
    unitspercase: number;
    description: string;
}


const productSchema: Schema = new Schema<IProductItem>({
    productid: { type: String, required: true },
    productname: { type: String, required: true },
    unitspercase: { type: Number, required: true },
    description: { type: String, }


});

const product = mongoose.model<IProductItem>('productrange', productSchema);

export default product;