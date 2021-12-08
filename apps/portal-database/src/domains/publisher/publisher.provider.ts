import { Connection } from 'mongoose';
import { PublisherSchema } from './publisher.schema';
import { PUBLISHER, PUBLISHER_MODEL } from "../constants";

export const publisherProvider = [
    {
        provide: PUBLISHER_MODEL,
        useFactory: (connection: Connection) => connection.model(PUBLISHER, PublisherSchema),
    },
];