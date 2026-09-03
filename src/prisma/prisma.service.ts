import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        // 解析环境变量拆分出数据库连接参数，不要直接传DATABASE_URL字符串给adapter
        super({
            adapter: new PrismaMariaDb({
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT || 3306),
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
            }),
        });
    }
    async onModuleInit() {
        await this.$connect();
    }
}
