import express from "express";
const app = express();
import { PizzaService } from "./services/pizza-services.js";

const port = 3000;

app.use(express.json())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

app.get('/Pizza', async (req, res) => {
    const pizza = await PizzaService.getAll(req.params.id)
    res.status(200).send(pizza)
})

app.get('/Pizza/:id', async (req, res) => {
    const pizza = await PizzaService.getById(req.params.id)
    res.status(200).send(pizza)

})

app.get('/Pizza', async (req, res) => {
    const pizza = await PizzaService.getALL()
    res.status(200).send(pizza)

})

app.post('/Pizza', async (req, res) => {
    console.log("en post, req:", req)
    try {
        await PizzaService.insert(req.body)
        res.status(200).json({ message: 'Pizza creada' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Fallo el insert' });
    }
})

app.put('/Pizza/:id', async (req, res) => {
    try {
        await PizzaService.update(req.params.id, req.body);
        res.status(200).json({ message: 'Pizza Actualizada'});
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Fallo el update' });

    }
})

app.delete('/Pizza/:id', async (req, res) => {
    try {
        await PizzaService.deleteById(req.params.id);
        res.status(200).json({ message: 'Pizza Eliminada'});
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Fallo el delete' });

    }
})