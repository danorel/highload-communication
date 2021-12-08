import { Document } from 'mongoose';

export interface Publisher extends Document {
    readonly name: string;
    readonly surname: string;
    readonly age: number;
}