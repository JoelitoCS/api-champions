import { Equipo } from "../modelos/modeloEquipos.js";


export async function leerEquipos(req, res){
    try {
        const equipos = await Equipo.find({});
        res.json({ mensaje: 'Lista de equipos', equipos });
    } catch (err) {
        res.status(500).json({ mensaje: 'Error al obtener los equipos' });
    }
}

export async function añadirEquipos(req, res){
    try {
        const nuevoEquipo = new Equipo(req.body);
        const equipo = await nuevoEquipo.save();
        res.status(201).json({ mensaje: 'Equipo añadido correctamente', equipo });
    } catch (err) {
        res.status(500).json({ mensaje: 'Error al añadir el equipo', error: err.message }); // ← añade error: err.message
    }
}