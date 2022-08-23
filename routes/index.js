
import express from 'express';

// const express = require('express');
export const router = express.Router();

router.get('/', (req, res) =>
{
    res.render('index');
})