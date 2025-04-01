import { signIn } from "@/lib/auth";
import { NextResponse } from "next/server";


export async function POST(request:Request){
    try {
        const {email, password} = await request.json()
        const result = await signIn("credentials", {
            email, password, redirect: false
        })

        if(result?.error) {
            return NextResponse.json({error: result.error}, {status: 401})
        }

        return NextResponse.json({success: true, status: 200})
    } catch (error) {
        return NextResponse.json({error: "Authentication failed"}, {status: 500})
        
    }
}

// export { POST as GET, POST as PUT, POST as DELETE, POST as PATCH };
