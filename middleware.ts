import { NextResponse } from "next/server"; 
import { NextRequest } from "next/server";


export function middleware(request: NextRequest){
   if(request.nextUrl.pathname === "/"){
      return NextResponse.redirect(new URL("/login", request.url))
   }
}
export const config = {
   matcher: ['/'], // Only run on home page
 }