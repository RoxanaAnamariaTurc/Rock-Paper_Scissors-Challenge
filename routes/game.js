import express from 'express';
import Game from '../src/game.js';

// const express = require('express');
export const router = express.Router();
// const Game = require('../src/game');

router.post('/', (req, res) =>
{
    const game = new Game(new Computer());
    let name = req.body.player1;
    game.addName(name);
    let choice = req.body.choice;
    game.playerChoice(choice);
    let result = game.result();
    res.render(`game`, { message: result });


})

// router.get('/index', (req, res) =>
// {
//     res.render('index')
// })


