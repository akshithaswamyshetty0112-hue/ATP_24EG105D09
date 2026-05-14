import { UserModel } from "../models/userModel.js";

export async function createUser(req, res) {
    try {
        const newUser = req.body;
        await UserModel.create(newUser);
        res.status(201).json({ message: "user created" });
    } catch (err) {
        res.status(400).json({ message: "user not created", error: err.message });
    }
}

export async function getUsers(req, res) {
    try {
        const users = await UserModel.find();
        res.json({ message: "all users", payload: users });
    } catch (err) {
        res.status(500).json({ message: "users not found", error: err.message });
    }
}

export async function getUserById(req, res) {
    try {
        const idOfUrl = Number(req.params.id);
        const user = await UserModel.findOne({ id: idOfUrl });

        if (user === null) {
            return res.status(404).json({ message: "user not found" });
        }

        res.json({ message: "user found", payload: user });
    } catch (err) {
        res.status(500).json({ message: "user not found", error: err.message });
    }
}

export async function updateUser(req, res) {
    try {
        const modifiedUser = req.body;
        const updatedUser = await UserModel.findOneAndUpdate(
            { id: modifiedUser.id },
            modifiedUser,
            { new: true, runValidators: true }
        );

        if (updatedUser === null) {
            return res.status(404).json({ message: "user not found" });
        }

        res.json({ message: "user updated", payload: updatedUser });
    } catch (err) {
        res.status(400).json({ message: "user not updated", error: err.message });
    }
}

export async function deleteUser(req, res) {
    try {
        const idOfUrl = Number(req.params.id);
        const deletedUser = await UserModel.findOneAndDelete({ id: idOfUrl });

        if (deletedUser === null) {
            return res.status(404).json({ message: "user not found to delete" });
        }

        res.json({ message: "user removed", payload: deletedUser });
    } catch (err) {
        res.status(500).json({ message: "user not deleted", error: err.message });
    }
}
