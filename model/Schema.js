import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
})

const Users = models.user || model('user', userSchema)

export default Users;
