export const runtime = 'nodejs'; 
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
// import { hashPassword } from "@/lib/password"

import { PrismaAdapter } from "@auth/prisma-adapter"
import  {db as prisma} from "@/app/lib/db"
import { getUserFromDb } from "@/app/lib/authUtils"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
      Credentials({
        credentials: {
          email: {label: "Email", type: "email"},
          password: {label: "Password", type: "password"},
        },
        authorize: async (credentials) => {
            try {
                if(!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required")
                }

                const user = await getUserFromDb(credentials.email as string, credentials.password as string)

                if(!user) {
                    throw new Error("Invalid credentials")
                }
                return user
            } catch (error) {
                console.log("Authentication error: ", error)
                return null               
            }
        
        },
      }),
    ],
    session:{
      strategy: 'jwt',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      updateAge: 24 * 60 * 60, // 24 hours
    },

    // JWT configuration
    jwt:{
      maxAge: 60 * 60 * 24 *30, // 30 days
    },

    // callback for session handling
    callbacks:{
      async jwt({token, user}){
        // add user infor to the token on signin
        if(user){
          token.id = user.id;
          token.email = user.email;
          token.name = user.name;
        }
        return token
      },
      async session ({session, token}){
        if(token){
          session.user.id = token.id as string
          session.user.email = token.email as string
          session.user.name = token.name as string
        }
        return session
      }
    },

    pages:{
      signIn: '/login',
      signOut: '/logout',
      error: '/error',
    },

    secret: process.env.AUTH_SECRET,
    useSecureCookies: process.env.NODE_ENV === 'production',

  })
  