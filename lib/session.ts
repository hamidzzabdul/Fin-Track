import {auth} from "@/lib/auth"

// Get current user session

export async function getCurrentUser(){
    const session = await auth()

    return session?.user
}

// Check if user is authenticated
export async function isAuthenticated() {
    const session = await auth();
    return !!session?.user;
  }

// Get user role (if you have roles in your system)
// export async function getUserRole() {
//     const session = await auth();
//     return session?.user;
//   }