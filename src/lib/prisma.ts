import { PrismaClient } from "@prisma/client"
// const prisma = new PrismaClient({ log: ['query'] })


class Prisma {
  private static  _instance: Prisma

  public cliente = new  PrismaClient()

  static get instance() {
    if (this._instance) return this._instance
    this._instance = new Prisma()
    return this._instance
  }

}

export {Prisma}