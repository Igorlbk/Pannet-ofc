import { usuario } from "../Models/usuarioModel.js";

export class usuarioController{
    static async getUser(req, res){
        try {
                const usuarios = await usuario.get()
                return res.status(200).json(usuarios)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        } 
    }

    static async getUserProfile(req, res){
        try {
                const { id_usuario, nick, email, senha, data_insert, data_update, img_perfil, status} = req.body
                const usuarios = await new usuario(id_usuario, nick, email, senha, status, data_insert, data_update, img_perfil, status).getProfile()
                return res.status(200).json(usuarios)
        } 
        catch (error) 
        {
            console.log(error) 
            return res.status(500).json(error)
        }
    }

    static async insertUser(req, res){
        try {
                const { id_usuario, nick, email, senha, data_insert, data_update, status} = req.body
                const newUser = await new usuario(id_usuario, nick, email, senha, data_insert, data_update, status).insert()
                return res.status(200).json(newUser)
        } 
        catch (error) 
        {
            console.log(error) 
            return res.status(500).json(error) 
        }
    } 
/*
    static async updateUser(req, res){
        try {
                const { id_usuario } = req.params
                const {id_usuario ,email, senha, nome, status, data_insert, data_update, img_perfil} = req.body
                const alterUser = await new Usuar(id_usuario ,email, senha, nome, status, data_insert, data_update, img_perfil).update()
                return res.status(200).json(alterUser)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }
*/
    static async deleteUser(req, res){
        try {
                const { id_usuario } = req.params
                const { nick, email, senha,img_perfil, data_insert, data_update, status} = req.body
                const delUser = await new usuario(id_usuario, nick, email, senha,img_perfil, data_insert, data_update, status).delete()
                return res.status(200).json(delUser)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    static async loginUser(req, res){
        try {
            const { id_usuario ,email, senha, nome, img_perfil, data_insert, data_update, status} = req.body
            const loginUser = await new usuario(id_usuario ,email, senha, nome,img_perfil , data_insert, data_update, status).login()
            return res.status(200).json(loginUser)
        } 
        catch (error) {
            console.log('login ' + error)
        }
    }
}