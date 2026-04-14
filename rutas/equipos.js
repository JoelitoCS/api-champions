import express from 'express';
import { leerEquipos } from '../controladores/equipos.js';
const routerEquipos = express.Router();

routerEquipos.get('/', leerEquipos)










export default routerEquipos;