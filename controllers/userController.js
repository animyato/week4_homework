import userModel from "../models/userModel.js";

export const createUser = async (req, res) => {
    try{
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).send('New user is created');
    }catch (error){
        res.status(409).send(error);
    }
}

export const getUsers = async (req, res) => {
    try{
        const userList = await userModel.find({});
        res.status(200).send(userList);
    }catch (error){
        res.status(404).send(error);
    }
}

export const updateUser = async (req, res) => {
    try{
        const { id } = req.params;
        const updatedUser = await userModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).send(updatedUser);
    }catch (error){
        res.status(409).send(error);
    }
}

export const deleteUser = async (req, res) => {
    console.log(req.body)
    try{
        const  id = req.body;
        await userModel.findByIdAndDelete(id);
        res.status(200).send('User is deleted');
    }catch (error){
        res.status(409).send(error);
    }
}

export const getUserById = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await userModel.findById(id);
        res.status(200).send(user);
    }catch (error){
        res.status(409).send(error);
    }
}
