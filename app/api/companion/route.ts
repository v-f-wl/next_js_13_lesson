import { currentUser } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function POST(req: Request){
  try{
    const body = await req.json()
    const user = await currentUser()
    const { src, name, description, instruction, seed, categoryId } = body
  } catch(error){
    console.log('[COMPANION_POST]', error)
    return new NextResponse('Ошибка', { status: 500 })
  }
}