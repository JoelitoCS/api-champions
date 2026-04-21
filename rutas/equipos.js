import express from 'express';
import { leerEquipos } from '../controladores/equipos.js';
import { añadirEquipos } from '../controladores/equipos.js';
const routerEquipos = express.Router();

routerEquipos.get('/', leerEquipos)
routerEquipos.post('/equipos', añadirEquipos)



export default routerEquipos;