import { Connection } from 'mongoose';
import { ArticleSchema, ARTICLE, ARTICLE_MODEL } from '@communication/schema';
import { DATABASE_CONNECTION } from '../database.constants';

export const articleProvider = [
    {
        provide: ARTICLE_MODEL,
        useFactory: (connection: Connection) =>
            connection.model(ARTICLE, ArticleSchema),
        inject: [DATABASE_CONNECTION]
    }
];
