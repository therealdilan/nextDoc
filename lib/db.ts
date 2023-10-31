import { PrismaClient } from "@prisma/client";

const GlobalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
}

export const prisma = GlobalForPrisma.prisma ?? new PrismaClient({
  log: ["query"],
});

if (process.env.NODE_ENV !== "production") {
  GlobalForPrisma.prisma = prisma;
}

export function getDocList() {
  return prisma.doc.findMany();
}

