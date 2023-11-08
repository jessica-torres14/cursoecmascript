let tipo_servicios = ['Revisión Básica', 'Revisión Intermedia', 'Perijate(Sin Pista)', 'Avaluo Total', 'Suspención & Frenos','Compresión ','Consultorio', 'Scanner'];
let tipo_vehiculos = ['1', '2', '3', '4'];
let tipo_combustible = ['1', '2', '3', '4'];
for (let i = 0; i < tipo_servicios.length; i++) {
    const servicio = tipo_servicios[i];
    for (let x = 0; x < tipo_vehiculos.length; x++) {
        const vehiculo = tipo_vehiculos[x];
        for (let y = 0; y < tipo_combustible.length; y++) {
            const combustible = tipo_combustible[y];
            let cmd = `INSERT INTO tipo_servicio(IdTipoVehiculo, IdCombustible, Nombre, Precio) VALUES( ${vehiculo}, ${combustible}, ${servicio}, 10000)`;
 console.log(cmd);
        }
    }
}
