import { Connection } from 'mongoose';
import { PublisherSchema } from './publisher.schema';
import { DATABASE_CONNECTION, PUBLISHER, PUBLISHER_MODEL } from "../database.constants";

export const publisherProvider = [
    {
        provide: PUBLISHER_MODEL,
        useFactory: (connection: Connection) => connection.model(PUBLISHER, PublisherSchema),
        inject: [DATABASE_CONNECTION]
    },
];