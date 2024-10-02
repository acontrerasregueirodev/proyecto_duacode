import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Proyectos = () => {
    const [proyectos, setProyectos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProyectos = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/proyectos/');
                setProyectos(response.data); // Asignar la lista de proyectos al estado
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchProyectos();
    }, []);

    if (loading) return <div>Cargando proyectos...</div>;
    if (error) return <div>Error al cargar proyectos: {error.message}</div>;

    return (
        <div>
            <h1>Lista de Proyectos</h1>
            {proyectos.length > 0 ? (
                <ul>
                    {proyectos.map((proyecto) => (
                        <li key={proyecto.id}>
                            <h2>{proyecto.nombre}</h2>
                            <p>{proyecto.descripcion}</p>
                            <p>Fecha de Inicio: {proyecto.fecha_inicio}</p>
                            <p>Fecha de Fin: {proyecto.fecha_fin || 'En curso'}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay proyectos disponibles.</p>
            )}
        </div>
    );
};

export default Proyectos;

