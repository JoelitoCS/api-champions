//array con datos de equipos de la champions
const equipos = [
    {
        id: 1,
        nombre: 'Real Madrid',
    },
    {
        id: 2,
        nombre: 'Manchester City',
    },
    {
        id: 3,
        nombre: 'Manchester United',
    },
]



export function leerEquipos(req, res){
    console.log('Se ha recibido una solicitud GET en la ruta /api/equipos');
    res.json ({
        mensaje: 'Lista de equipos de controlador',
        equipos: equipos
    })

}


export function añadirEquipos(req, res){
    console.log('Se ha recibido una solicitud POST en la ruta /api/equipos');
    const nuevoEquipo = req.body;
    equipos.push(nuevoEquipo);
    res.json({
        mensaje: 'Equipo añadido correctamente',
        equipo: nuevoEquipo
    })
}