import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json()
    const hashedPassword = bcrypt.hashSync(password, 10)
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    })
    return Response.json({
      message: 'create uer ok hafu.',
      data: {
        newUser,
      },
    })
  } catch (error) {
    return Response.json(
      {
        error,
      },
      { status: 500 }
    )
  }
}
