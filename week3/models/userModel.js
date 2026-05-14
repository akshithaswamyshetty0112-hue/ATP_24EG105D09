import { Schema, model } from 'mongoose'

const userSchema = new Schema(
    {
        id: {
            type: Number,
            required: [true, "id is mandatory field"],
            unique: true
        },
        name: {
            type: String,
            required: [true, "name is required"]
        },
        age: {
            type: Number,
            required: [true, "age is required"]
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export const UserModel = model("user", userSchema)
