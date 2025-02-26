import { usersService } from "../services/index.js"
import CustomError from '../utils/Errors/CustomError.js'
import EError from "../utils/Errors/enums.js";
import { generateUserErrorInfo } from "../utils/Errors/info.js";

const getAllUsers = async(req,res)=>{
    const users = await usersService.getAll();
    res.send({status:"success",payload:users})
}

const getUser = async(req,res)=> {
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error",error:"User not found"})
    res.send({status:"success",payload:user})
}

const createUser = async(req, res, next) => {
    try {
        const {first_name, last_name, email, password} = req.body
        // validación 
        if (!first_name || !last_name || !email) {
            CustomError.createError({
                name: 'User creation error',
                cause: generateUserErrorInfo({
                    first_name,
                    last_name, 
                    email
                }),
                message: 'Error trying to created user',
                code: EError.INVALID_TYPE_ERROR
            })
            
        }
        const newUser = {first_name, last_name, password, email}
     
        const result = await this.usersService.create(newUser)
        
        res.status(201).send({ 
            status: 'success',
            payload: result        
        })
    } catch (error) {
        // console.log(error)
        next(error)
    }
}

const updateUser =async(req,res)=>{
    const updateBody = req.body;
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error", error:"User not found"})
    const result = await usersService.update(userId,updateBody);
    res.send({status:"success",message:"User updated"})
}

const deleteUser = async(req,res) =>{
    const userId = req.params.uid;
    const result = await usersService.getUserById(userId);
    res.send({status:"success",message:"User deleted"})
}

export default {
    createUser,
    deleteUser,
    getAllUsers,
    getUser,
    updateUser
}