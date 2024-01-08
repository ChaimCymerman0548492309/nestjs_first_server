import * as mongoose from 'mongoose';

export const ProductSchma = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },

})

export interface Product extends mongoose.Document {
    title: string;
    description: string;
    price: number;
}
