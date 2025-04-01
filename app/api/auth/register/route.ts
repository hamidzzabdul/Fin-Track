export const runtime = 'nodejs'; 

import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";
import {hashPassword} from "@/lib/password"
export async function POST(req: Request) {
    try {
        const body = await req.json()
        const {email, username, password} = body

        if (!email || !password) {
            return NextResponse.json(
              { error: 'Email and password are required' },
              { status: 400 }
            );
          }
        // check if email exist
        const existingUserByEmail = await db.user.findUnique({
            where: {email: email.toLocaleLowerCase()}
        })

        if(existingUserByEmail){
            return NextResponse.json({user:null, message: "User with this email already exist"}, {status: 409})
        }
  

        const hashedPassword = await hashPassword(password);
        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        })

        const{ password: _, ...rest} = newUser

        return NextResponse.json({user: rest, message: "User created successfully"}, {status: 201})

    } catch (error) {
        console.log("Registration Error:", error)
        return NextResponse.json({user:null, message: "something went wrong"}, {status: 500})
    }
}