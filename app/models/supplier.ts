import mongoose, { Document, Model, Mongoose, Schema } from 'mongoose';

export interface ISupplier extends Document {
    supplier: string,
    contactname: string,
    email: string,
    phone: string,
    adress: string
}
// Define the user schema
const supplierSchema =new Schema<ISupplier>({
    supplier: { type: String, required: true, },

    contactname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: false, // It's better to use `required` instead of `require`
    },
});


// Create models based on the schemas
const Supplier = mongoose.model<ISupplier> ('Supplier', supplierSchema, 'suppliers');
//const OAuthUser = model('OAuthUser', oauthUserSchema, 'users');

export default Supplier;
