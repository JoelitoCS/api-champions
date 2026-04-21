import mongoose from 'mongoose';

const equipoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    ciudad: { type: String, required: true },
    estadio: { type: String, required: true },
    fundacion: { type: Number, required: true }
});

export const Equipo = mongoose.model('Equipo', equipoSchema);
