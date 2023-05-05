import config from '../db-config.js';
import sql from 'mssql';

export class PizzaService {
    static getAll = async () => {
        let returnEntity = null;
        console.log('Estoy en: PizzaService.GetAll()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FORM Pizzas');
            returnEntity = result.recordsets[0][0];
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
                .query('SELECT * FORM Pizzas WHERE id = @pId');
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
                .query('INSERT INTO Pizza (nombre, ) VALUES (@pNom, @pLibre, @pImporte, @pDesc)');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static update = async (pizza) => {
        let returnEntity = null;
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

    static deleteBy = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: PizzasService.deleteBy(pizza)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('DELETE FROM Pizzas WHERE id = @pId');
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error)
        }
        return rowsAffected;
    }

}