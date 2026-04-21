import cors from 'cors';
import express from 'express';
import routerEquipos from './rutas/equipos.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
//middleware para rutas
app.use(express.json());
app.use("/api/equipos", routerEquipos);

app.get('/', (req, res) => {
    res.send('API de la remontada ' + process.env.EJEMPLO);
    console.log('Se ha recibido una solicitud GET en la ruta /');
});

// app.get("api/equipos", (req,res) => {
//     console.log('Se ha recibido una solicitud GET en la ruta /api/equipos');
//     res.json ({
//         mensaje: 'Lista de equipos',
//         equipos: []
//     })
// })

app.listen(PORT,() => {
    console.log('Se esta ejecutando el puerto= ' + PORT);
    
});
