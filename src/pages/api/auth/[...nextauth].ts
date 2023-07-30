import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {

    providers: [
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID || '',
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET || '',
        })
    ],

    pages: {
        signIn: `${process.env.NEXTAUTH_URL}/login`
    }
}

export default NextAuth(authOptions) 