import NextAuth from "next-auth/next";

// Importo Los providers
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";



export default NextAuth({
    providers: [
        //Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        //Github Provider
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ]

})