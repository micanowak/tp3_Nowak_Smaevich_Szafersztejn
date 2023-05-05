import pkg from 'express';
const { app } = pkg;
import express from "express"
import { PizzaService } from "./services/pizza-services.js";

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

app.use(express.json())
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