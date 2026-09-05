import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        const databaseUrl = process.env.DATABASE_URL;
        if (!databaseUrl)
        {
            throw new Error('DATABASE_URL is not configured');
        }

        const url = new URL(databaseUrl);

        super({
            adapter: new PrismaMariaDb({
                host: process.env.DB_HOST || url.hostname,
                port: Number(process.env.DB_PORT || url.port || 3306),
                user: process.env.DB_USER || decodeURIComponent(url.username),
                password: process.env.DB_PASSWORD || decodeURIComponent(url.password),
                database: process.env.DB_NAME || decodeURIComponent(url.pathname.slice(1)),
            }),
        });
    }
    async onModuleInit() {
        await this.$connect();
    }
}
