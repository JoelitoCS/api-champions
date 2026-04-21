import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import routerEquipos from './rutas/equipos.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

app.use(cors());
app.use(express.json());
app.use("/api/equipos", routerEquipos);

app.get('/', (req, res) => {
    res.send('API de la remontada ' + process.env.EJEMPLO);
});

app.listen(PORT, () => {
    console.log('Se esta ejecutando el puerto= ' + PORT);
});