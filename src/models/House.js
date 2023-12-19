import { Schema } from "mongoose";

export const HouseSchema = new Schema({
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imgUrl: {
        type: String,
        required: true,
        default: 'https://unsplash.com/photos/white-and-red-wooden-house-miniature-on-brown-table-rgJ1J8SDEAY'
    },
    description: {
        type: String,
        minLength: 3
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});