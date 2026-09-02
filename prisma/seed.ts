import { PrismaClient, Prisma } from '../src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter: pool });

const userData: Prisma.StoreCreateInput[] = [
    {
        name: '即刻记忆自习室(天山银河广场店)',
        address: '河北省石家庄市高新区天山银河广场C座816室',
        longitude: 114.314522,
        latitude: 38.020422,
        phone: '13800000000',
        openingTime: '08:00',
        closingTime: '23:59',
        isActive: true,
        description: '即刻记忆自习室(天山银河广场店)',
        createdAt: new Date().getTime(),
        updatedAt: 0,
        deletedAt: 0
    },
    {
        name: '即刻记忆自习室(海悦天地店)',
        address: '河北省石家庄市新华区海悦天地C座816室',
        longitude: 114.314522,
        latitude: 38.020422,
        phone: '13800000000',
        openingTime: '08:00',
        closingTime: '23:59',
        isActive: true,
        description: '即刻记忆自习室(海悦天地店)',
        createdAt: new Date().getTime(),
        updatedAt: 0,
        deletedAt: 0
    }

];

async function main() {
    console.log(`Start seeding ...`);

    await prisma.store.deleteMany();

    for (const u of userData)
    {
        const store = await prisma.store.create({
            data: u,
        });
        console.log(`Created store with id: ${store.id}`);
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