import { poolConnection } from "../../poolConnect.js";

const Connection = await poolConnection()

export class postagem{
    constructor(id_postagem, texto, img_post, id_usuario, id_sala, id_amigos_usuario, data_insert, data_update){
        if(id_postagem == '' || id_postagem == null || id_postagem == undefined){
            this.id_postagem = ''
        }else{
            this.id_postagem = id_postagem
        }
        if(texto == '' || texto == null || texto == undefined){
            this.texto = ''
        }else{
            this.texto = texto
        }
   
        if(img_post == '' || img_post == null || img_post == undefined){
            this.img_post = ''
        }else{
            this.img_post = img_post
        }

        if(id_usuario == '' || id_usuario == null || id_usuario == undefined){
            this.id_usuario = ''
        }else{
            this.id_usuario = id_usuario
        }

        if(id_sala == '' || id_sala == null || id_sala == undefined){
            this.id_sala = ''
        }else{
            this.id_sala = id_sala
        }

        if(id_amigos_usuario == '' || id_amigos_usuario == null || id_amigos_usuario == undefined){
            this.id_amigos_usuario = ''
        }else{
            this.id_amigos_usuario = id_amigos_usuario
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

    }

    static async get(){
        try {
            const { recordset } = await Connection.query('select * from postagem')
            return recordset
        } 
        catch (error)
        {
            console.log('error model ' + error)
            return error(error)
        }
    }

    async getPost(){
        try {
            const { recordset } = await con.query(`select id_postagem, texto, img_post, id_usuario, id_sala, id_amigos_usuario, data_insert, data_update from usuario 
            where id_postagem = '${this.id_postagem}'`)
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
            const { rowsAffected } = Connection.query(`insert into postagem values ('${this.texto}', '${this.img_post} 
             '' ,'${this.data_insert}', '${this.data_update}')`)
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
            const { rowsAffected } = await Connection.query(`delete from postagem where id_postagem = ${this.id_postagem}`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }
    /* Login está verificando primeiro se a conta existe com o "where" */