import * as mongoose from 'mongoose';

export const PublisherSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
});