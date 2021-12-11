import { Document, Schema } from 'mongoose';
import { Prop, Schema as NestSchema, SchemaFactory } from "@nestjs/mongoose";
import { Publisher, PUBLISHER } from "../publisher";
import { Tracker } from "../tracker";

export type ArticleDocument = Article & Document;

@NestSchema()
export class Article extends Tracker {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    content: string;

    @Prop({
        required: true,
        type: Schema.Types.ObjectId,
        ref: PUBLISHER
    })
    publisher: Publisher;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);