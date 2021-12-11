import { Prop } from "@nestjs/mongoose";

export class Tracker {
    @Prop({ required: true })
    completedAt: Date;

    @Prop({ required: true })
    createdAt: Date;

    @Prop()
    deletedAt?: Date;
}