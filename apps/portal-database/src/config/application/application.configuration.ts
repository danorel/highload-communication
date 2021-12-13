import { registerAs } from '@nestjs/config';

export default registerAs('application', () => ({
    node_env: process.env.NODE_ENV
}));
