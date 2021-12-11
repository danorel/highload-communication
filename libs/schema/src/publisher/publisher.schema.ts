import { Document } from 'mongoose';
import { Prop, Schema as NestSchema, SchemaFactory } from "@nestjs/mongoose";
import { Tracker } from "../tracker";

export type PublisherDocument = Publisher & Document;

@NestSchema()
export class Publisher extends Tracker {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    surname: string;

    @Prop({ required: true })
    age: number;
}

export const PublisherSchema = SchemaFactory.createForClass(Publisher);