import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Proyectos = () => {
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        console.log("componente montado")
        axios.get('http://localhost:8000/api/proyectos/')
            .then(response => {
                setEmpleados(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error("Hubo un error al obtener los proyectos", error);
            });
    }, []);

    return (
        <div>
            <h1>Lista de Empleados y Proyectos</h1>
            {empleados.map(empleado => (
                <div key={empleado.id}>
                    <h2>{empleado.nombre} {empleado.apellido_1}</h2>
                    <p>Puesto: {empleado.puesto}</p>
                    <h3>Proyectos Asignados:</h3>
                    <ul>
                        {empleado.proyectos.map(proyecto => (
                            <li key={proyecto.id}>{proyecto.nombre}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Proyectos;

