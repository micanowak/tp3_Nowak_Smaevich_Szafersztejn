import { application } from "express";
import express from "express"
import { pizzaSerice } from "./services/pizza-services";

app.get('/pizza',async (req,res) => {
    const pizza = await pizzaSerice.getAll(req.params.id)
    res.status(200).send(pizza)
})

app.post('/pizza',async (req, res) => {
    console.log("en post, req:", req)
    try{
        await pizzaSerice.insert(req.body)
        res.status(200).json({message: 'Pizza creada'})
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: 'Falló el insert'})
    }
})