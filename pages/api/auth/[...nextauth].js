import NextAuth from "next-auth/next";

// Importo Los providers
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

// Importo la base de datos
import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";

// Se utiliza para comparar las credenciales que ingresamos en el inpunt vs lo que viene de la base de datos
import { compare } from "bcryptjs";



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
        }),
        //Credentials Provider
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {
                await connectMongo().catch(err => res.json({ error: "Error al conectar a la base de datos" }))

                // Chequeo que el usuario exista
                const result = await Users.findOne({ email: credentials.email })

                // Si no existe el usuario
                if (!result) {
                    throw new Error("Usuario no existe")
                }

                //comparar las contraseñas
                const isMatch = await compare(credentials.password, result.password)

                // contraseña incorrecta
                if (!isMatch || result.email !== credentials.email) {
                    throw new Error("Credenciales incorrectas")
                }

                return result;

            }
        }),

    ],
    secret: process.env.NEXTAUTH_SECRET

})