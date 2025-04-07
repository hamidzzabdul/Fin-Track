import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db as prisma } from "@/app/lib/db";



export async function POST(req: Request) {
    try {
        const session = await auth()

        if(!session?.user?.id){
            return NextResponse.json({message: "Unauthorized"}, {status: 401})
        }
        const body =await req.json()
        const {name, amount, date} = body

        const income = await prisma.Income.create({
            data:{
                name,
                amount, 
                date: new Date(date),
                userId: session.user.id
            }
        })
        return NextResponse.json({message: "Income added successfully", income}, {status: 200})

    } catch (error) {

        console.log("[INCOME_POST]" , error)

        return NextResponse.json({message: "Internal server error"}, {status: 500})
        
    }
}


export async function GET() {  
    try {
        const session = await auth()
        if(!session?.user?.id){
            return NextResponse.json({message: "Unauthorized"}, {status: 401})
        }

        const incomes = await prisma.Income.findMany({
            where: {userId: session.user.id},
            orderBy: {date: "desc"}
        })

        return NextResponse.json(incomes)
    } catch (error) {
        console.log("[INCOME_GET",error)
        return NextResponse.json({message: "Internal server error"}, {status: 500})
    }
}