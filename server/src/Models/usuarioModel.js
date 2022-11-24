import { poolConnection } from "../../poolConnect.js";

const Connection = await poolConnection()

export class usuario{
    constructor(id_usuario, nick, email, senha, img_perfil, data_insert, data_update, status){
        if(id_usuario == '' || id_usuario == null || id_usuario == undefined){
            this.id_usuario = ''
        }else{
            this.id_usuario = id_usuario
        }
        if(nick == '' || nick == null || nick == undefined){
            this.nick = ''
        }else{
            this.nick = nick
        }

        if(email == '' || email == null || email == undefined){
            this.email = ''
        }else{
            this.email = email
        }

        if(senha == '' || senha == null || senha == undefined){
            this.senha = ''
        }else{
            this.senha = senha
        }

        
        if(img_perfil == '' || img_perfil == null || img_perfil == undefined){
            this.img_perfil = ''
        }else{
            this.img_perfil = img_perfil
        }

        if(data_insert == '' || data_insert == null || data_insert == undefined){
            this.data_insert = ''
        }else{
            this.data_insert = data_insert
        }

        if(data_update == '' || data_update == null || data_update == undefined){
            this.data_update = ''
        }else{
            this.data_update = data_update
        }
        if(status == '' || status == null || status == undefined){
            this.status = 1
        }else{
            this.status = 1
        }
    }

    static async get(){
        try {
            const { recordset } = await Connection.query('select * from usuario')
            return recordset
        } 
        catch (error)
        {
            console.log('error model ' + error)
            return error(error)
        }
    }

    async getProfile(){
        try {
            const { recordset } = await con.query(`select id_usuario, data_update, data_insert, img_perfil, senha, email, nick from usuario 
            where nome = '${this.nome}' and statusUser = 1`)
            return recordset
        } 
        catch (error)
        {
            console.log('error model ' + error)
            return error(error)
        }
    }
  
    async insert(){
        try {
            const { rowsAffected } = Connection.query(`insert into usuario values ('${this.nick}', '${this.email}', 
            '${this.senha}', '' ,'${this.data_insert}', '${this.data_update}', '${this.status}')`)
            return true
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }
/* 
    async update(){
        try {
            const { rowsAffected } = await con.query(`update usuario set email = '${this.email}' , 
            senha = '${this.senha}', nome = '${this.nome}', nomePlum = '${this.nomePlum}', modDate = '${DateNow()}',
            fkImg = ${this.fkImg} where userID = ${this.userID}`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }
*/
    async delete(){
        try {
            const { rowsAffected } = await Connection.query(`delete from usuario where id_usuario = ${this.id_usuario}`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }
    /* Login está verificando primeiro se a conta existe com o "where" */

    async login(){
        try {
            const { recordset } = await Connection.query(`SELECT * FROM usuario 
                WHERE email = '${this.email}' and senha = ${this.senha} and status = 1`)
            if (recordset.length > 0)
                return recordset
            else
                return false
        } 
        catch (error) 
        {
            console.log('Model error ' + error)
            return error
        }
    }
}