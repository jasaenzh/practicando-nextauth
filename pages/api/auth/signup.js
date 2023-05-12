import connectMongo from "../../../database/conn"
import Users from "../../../model/Schema"
import { hash } from "bcryptjs"


export default async function handler(req, res) {
    //Conectando a la base de datos
    await connectMongo().catch(err => res.json({ error: "Error al conectar a la base de datos" }))

    //Swithcando el metodo de la peticion
    switch (req.method) {
        case "GET":
            return get(req, res)
        case "POST":
            if (!req.body) return res.status(404).json({ error: "No se recibieron datos" })

            const { username, email, password } = req.body

            // Validar si el usuario esta duplicado
            const checkUserExisting = await Users.findOne({ email })
            if (checkUserExisting) return res.status(422).json({ error: "El usuario ya existe" })

            // Encriptando la contraseña
            try {
                const user = await Users.create({ username, email, password: await hash(password, 12) });
                return res.status(201).json({ status: true, user });
            } catch (err) {
                return res.status(404).json({ msg: "Error al crear el usuario", err })
            }


        default:
            return res.status(405).json({ error: "Metodo no permitido" })
    }

}
