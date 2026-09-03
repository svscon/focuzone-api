import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStoreDto, StoreQueryDto, UpdateStoreDto } from './store.dto';
import { Prisma } from '@/generated/prisma';

@Injectable()
export class StoreService {
  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreateStoreDto) {
    const now = BigInt(Date.now());
    return this.prisma.store.create({
      data: {
        ...dto,
        createdAt: Number(now),
        updatedAt: Number(now),
        deletedAt: Number(0),
      },
    });
  }

  async findAll(query: StoreQueryDto) {
    const { page, pageSize, name, isActive } = query;
    const skip = ((page || 1) - 1) * (pageSize || 10);

    const where: Prisma.StoreWhereInput = {
      deletedAt: Number(0),
    };
    if (name) where.name = { contains: name };
    if (isActive !== undefined) where.isActive = isActive;

    const [list, total] = await Promise.all([
      this.prisma.store.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { createdAt: 'desc' },
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
        deletedAt: Number(0),
      },
    });
  }

  async update(id: string, dto: UpdateStoreDto) {
    return this.prisma.store.update({
      where: { id },
      data: {
        ...dto,
        updatedAt: Number(Date.now()),
      },
    });
  }

  /** 软删除 */
  async remove(id: string) {
    return this.prisma.store.update({
      where: { id },
      data: {
        deletedAt: Number(Date.now()),
        updatedAt: Number(Date.now()),
      },
    });
  }
}
