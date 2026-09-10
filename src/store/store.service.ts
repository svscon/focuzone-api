import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStoreDto, StoreQueryDto, UpdateStoreDto } from './store.dto';
import { Prisma } from '@/generated/prisma';

@Injectable()
export class StoreService {
  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreateStoreDto, userId: string) {
    const now = BigInt(Date.now());
    return this.prisma.store.create({
      data: {
        ...dto,
        userId: userId,
        createdTime: Number(now),
        updatedTime: Number(now),
        deletedTime: Number(0),
      },
    });
  }

  async findAll(query: StoreQueryDto) {
    const { page, pageSize, name, isActive } = query;
    const skip = ((page || 1) - 1) * (pageSize || 10);

    const where: Prisma.StoreWhereInput = {
      deletedTime: Number(0),
    };
    if (name) where.name = { contains: name };
    if (isActive !== undefined) where.isActive = isActive;

    const [list, total] = await Promise.all([
      this.prisma.store.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { createdTime: 'desc' },
      }),
      this.prisma.store.count({ where }),
    ]);

    return {
      list,
      total,
      page,
      pageSize,
    };
  }

  async findOne(id: string) {
    return this.prisma.store.findFirst({
      where: {
        id,
        deletedTime: Number(0),
      },
    });
  }

  async update(id: string, dto: UpdateStoreDto, userId: string) {
    return this.prisma.store.update({
      where: { id },
      data: {
        ...dto,
        userId: userId,
        updatedTime: Number(Date.now()),
      },
    });
  }

  /** 软删除 */
  async remove(id: string, userId: string) {
    return this.prisma.store.update({
      where: { id },
      data: {
        userId: userId,
        deletedTime: Number(Date.now()),
        updatedTime: Number(Date.now()),
      },
    });
  }
}
