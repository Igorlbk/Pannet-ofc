import { poolConnection } from "../../poolConnect.js";

const Connection = await poolConnection()

export class sala{
    constructor(id_sala, nome, img_sala, data_insert, data_update){
        if(id_sala == '' || id_sala == null || id_sala == undefined){
            this.id_sala = ''
        }else{
            this.id_sala = id_sala
        }

        if(nome == '' || nome == null || nome == undefined){
            this.nome = ''
        }else{
            this.nome = nome
        }   

        if(img_sala == '' || img_sala == null || img_sala == undefined){
            this.img_sala = ''
        }else{
            this.img_sala = img_sala
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
            const { recordset } = await Connection.query('select * from sala')
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
            const { recordset } = await con.query(`select id_sala, data_update, data_insert, img_sala, nome from sala 
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
            const { rowsAffected } = Connection.query(`insert into sala values ('${this.nome}', 
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
            const { rowsAffected } = await Connection.query(`delete from sala where id_sala = ${this.id_sala}`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }
    /* Login está verificando primeiro se a conta existe com o "where" */

  