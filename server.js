// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('frontend'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`AZUBUDDY on http://localhost:${PORT}`));