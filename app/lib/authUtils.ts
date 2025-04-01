import { comparePassword } from "@/lib/password";
import { db } from "./db";

export async function getUserFromDb(email: string, password: string) {
    try {
        const user = await db.user.findUnique({
            where: {email: email.toLocaleLowerCase()}
        })

        if(!user) return null
        const isValid = await comparePassword(password, user.password)

        if(!isValid) return null

        return {
            id: user.id,
            username: user.username,
            email: user.email,
        }
    } catch (error) {
        console.log("Error in getUserFromDb: ", error)
        return null
    }
}