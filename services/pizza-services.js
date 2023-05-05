import config from '../db-config.js';
import sql from 'mssql';

export class PizzaService {
    static getAll = async () => {
        let returnEntity = null;
        console.log('Estoy en: PizzaService.GetAll()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM pizza');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static getById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PizzaService.GetById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT * FROM pizza WHERE id = @pId');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static insert = async (pizza) => {
        let returnEntity = null;
        console.log('Estoy en: PizzaService.insert(pizza)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pNom', pizza.nombre)
                .input('pLibre', pizza.libreGluten)
                .input('pImporte', pizza.importe)
                .input('pDesc', pizza.descripcion)
                .query('INSERT INTO pizza (nombre, libreGluten, importe, descripcion) VALUES (@pNom, @pLibre, @pImporte, @pDesc)');
            returnEntity = result.recordsets[0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static update = async (id, pizza) => {
        let returnEntity = null;
        console.log(pizza);
        console.log('Estoy en: PizzaService.update(pizza)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .input('pNom', pizza.nombre)
                .input('pLibre', pizza.libreGluten)
                .input('pImporte', pizza.importe)
                .input('pDesc', pizza.descripcion)
                .query("UPDATE Pizza SET nombre=@pNom, libreGluten=@pLibre, importe=@pImporte, descripcion=@pDesc WHERE id = @pId");
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static deleteById = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: PizzasService.deleteBy(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('DELETE FROM pizza WHERE id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error)
        }
        return rowsAffected;
    }

}