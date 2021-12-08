import { Connection } from 'mongoose';
import { ArticleSchema } from './article.schema';
import { ARTICLE, ARTICLE_MODEL } from "../constants";

export const articleProvider = [
    {
        provide: ARTICLE_MODEL,
        useFactory: (connection: Connection) => connection.model(ARTICLE, ArticleSchema),
    },
];