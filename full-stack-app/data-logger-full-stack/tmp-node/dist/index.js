"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express = require('express');
var transcribe_1 = __importDefault(require("./routes/transcribe"));
var actions_1 = __importDefault(require("./routes/actions"));
var app = express();
app.use(express.json({ limit: '50mb' }));
var PORT = process.env.PORT || 3000;
app.use(transcribe_1.default);
app.use(actions_1.default);
app.get('/test', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    res.json({
        message: 'Hello World'
    });
});
app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});
