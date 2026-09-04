import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) { }

    async create(dto: CreateUserDto) {
        const now = Date.now();
        return this.prisma.user.create({
            data: {
                openId: dto.openId,
                type: dto.type ?? 0,
                nickname: dto.nickname,
                avatar: dto.avatar,
                phone: dto.phone,
                description: dto.description,
                balance: 0,
                points: 0,
                createdAt: now,
                updatedAt: now,
                deletedAt: 0,
            },
        });
    }

    async findOneById(id: string) {
        const user = await this.prisma.user.findFirst({
            where: { id, deletedAt: 0 },
        });
        if (!user) throw new NotFoundException('用户不存在');
        return user;
    }

    async findOneByOpenId(openId: string) {
        return this.prisma.user.findFirst({
            where: { openId, deletedAt: 0 },
        });
    }

    async findAll(page: number, pageSize: number) {
        const skip = (page - 1) * pageSize;
        const [list, total] = await Promise.all([
            this.prisma.user.findMany({
                where: { deletedAt: 0 },
                skip,
                take: pageSize,
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.user.count({ where: { deletedAt: 0 } }),
        ]);
        return { list, total, page, pageSize };
    }

    async update(id: string, dto: UpdateUserDto) {
        await this.findOneById(id);
        const now = Date.now();
        return this.prisma.user.update({
            where: { id },
            data: {
                ...dto,
                updatedAt: now,
            },
        });
    }

    async remove(id: string) {
        await this.findOneById(id);
        const now = Date.now();
        await this.prisma.user.update({
            where: { id },
            data: {
                deletedAt: now,
                updatedAt: now,
            },
        });
        return true;
    }

    async getOpenId(code: string) {
        const axios = require('axios');
        const appid = "wxac282c4031aab2dd";
        const secret = "fc4360d4b9d3fbf4b2db782d11e1c868";
        const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`;
        const res = await axios.get(url);
        return res;
    }
}
