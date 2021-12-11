import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION } from "./database.constants";

export const databaseProvider = [
    {
        provide: DATABASE_CONNECTION,
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb://localhost:27017/communication'),
    },
];