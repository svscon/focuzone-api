import 'dotenv/config';
import { PrismaClient, Prisma } from '../src/generated/prisma';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

// ─── Store 数据 ────────────────────────────────────────────────
const storeData: Prisma.StoreCreateInput[] = [
    {
        name: '即刻记忆自习室(天山银河广场店)',
        type: 0,
        province: '河北省',
        city: '石家庄市',
        address: '河北省石家庄市高新区天山银河广场C座816室',
        district: '高新区',
        longitude: 114.314522,
        latitude: 38.020422,
        seatCount: 100,
        phone: '13800000000',
        is24Hours: false,
        openTime: '08:00',
        closeTime: '23:59',
        isActive: true,
        features: 'WiFi,电源,空调,饮水机',
        promotion: '新用户首小时免费',
        price: 15,
        reviews: 0,
        sales: 0,
        coverImages: '',
        description: '安静舒适的学习环境',
        createdTime: Date.now(),
        updatedTime: 0,
        deletedTime: 0,
    },
    {
        name: '即刻记忆自习室(海悦天地店)',
        type: 0,
        province: '河北省',
        city: '石家庄市',
        address: '河北省石家庄市新华区海悦天地C座816室',
        district: '新华区',
        longitude: 114.314522,
        latitude: 38.020422,
        seatCount: 80,
        phone: '13800000001',
        is24Hours: true,
        openTime: '00:00',
        closeTime: '23:59',
        isActive: true,
        features: 'WiFi,电源,空调,饮水机,打印机',
        promotion: '24小时营业,包月更优惠',
        price: 18,
        reviews: 0,
        sales: 0,
        coverImages: '',
        description: '24小时营业,适合熬夜学习',
        createdTime: Date.now(),
        updatedTime: 0,
        deletedTime: 0,
    },
];

async function main() {
    console.log(`Start seeding ...`);

    const existingStoreCount = await prisma.store.count();
    if (existingStoreCount > 0)
    {
        console.log(`Found ${existingStoreCount} existing stores. Skipping seed.`);
        return;
    }

    // 按依赖顺序清理: Order → Seat → Area → Store
    await prisma.userOrder.deleteMany();
    await prisma.seat.deleteMany();
    await prisma.area.deleteMany();
    await prisma.store.deleteMany();
    await prisma.attachment.deleteMany();
    await prisma.notice.deleteMany();
    await prisma.comment.deleteMany();
    await prisma.card.deleteMany();
    await prisma.userCard.deleteMany();

    // 创建 Store
    const stores = await Promise.all(
        storeData.map((store) => prisma.store.create({ data: store }))
    );
    console.log(`Created ${stores.length} stores.`);

    // 为每个 Store 创建 Area 和 Seat
    for (const store of stores)
    {
        // 创建 2 个区域
        const areas = await Promise.all([
            prisma.area.create({
                data: {
                    storeId: store.id,
                    name: '普通区',
                    seatCount: 20,
                    sort: 1,
                    isActive: true,
                    description: '开放式学习区',
                    createdTime: Date.now(),
                    updatedTime: 0,
                    deletedTime: 0,
                },
            }),
            prisma.area.create({
                data: {
                    storeId: store.id,
                    name: 'VIP静音区',
                    seatCount: 10,
                    sort: 2,
                    isActive: true,
                    description: '安静独立的VIP区域',
                    createdTime: Date.now(),
                    updatedTime: 0,
                    deletedTime: 0,
                },
            }),
        ]);

        // 为每个 Area 创建一些 Seat
        for (const area of areas)
        {
            const seatCount = area.seatCount;
            const seats: Prisma.SeatCreateManyInput[] = [];
            for (let i = 1; i <= seatCount; i++)
            {
                seats.push({
                    storeId: store.id,
                    areaId: area.id,
                    type: 0,
                    seatNo: `${area.name.charAt(0)}${i.toString().padStart(3, '0')}`,
                    x: Math.floor((i - 1) / 5) * 80,
                    y: ((i - 1) % 5) * 60,
                    width: 60,
                    height: 50,
                    hasPower: true,
                    status: 0,
                    description: '',
                    createdTime: Date.now(),
                    updatedTime: 0,
                    deletedTime: 0,
                });
            }
            await prisma.seat.createMany({ data: seats });
            console.log(`Created ${seatCount} seats in area "${area.name}" of store "${store.name}".`);
        }
    }

    console.log(`Seeding finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });