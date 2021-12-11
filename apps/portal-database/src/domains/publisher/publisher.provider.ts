import { Connection } from 'mongoose';
import { PublisherSchema, PUBLISHER, PUBLISHER_MODEL } from '@communication/schema';
import { DATABASE_CONNECTION } from "../database.constants";

export const publisherProvider = [
    {
        provide: PUBLISHER_MODEL,
        useFactory: (connection: Connection) => connection.model(PUBLISHER, PublisherSchema),
        inject: [DATABASE_CONNECTION]
    },
];