import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetalleEmpleado = () => {
    const { id } = useParams(); // Obtener el ID del empleado de la URL
    const [empleadoDetail, setEmpleadoDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmpleado = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/empleados/${id}/`);
                setEmpleadoDetail(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchEmpleado();
    }, [id]);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error al cargar el empleado: {error.message}</div>;

    // Verificar que `empleadoDetail` y `empleadoDetail.proyectos` estén definidos antes de usar `.map()`
    return (
        <div>
            <h1>Detalles del Empleado</h1>
            {empleadoDetail && (
                <div>
                    <img src={`http://localhost:8000/media/${empleadoDetail.foto}`}
                        alt={`${empleadoDetail.nombre} ${empleadoDetail.apellido_1}`} />
                    <h2>{empleadoDetail.nombre} {empleadoDetail.apellido_1} {empleadoDetail.apellido_2}</h2>
                    <p>Email: {empleadoDetail.email}</p>
                    <p>Teléfono: {empleadoDetail.telefono}</p>
                    <p>Puesto: {empleadoDetail.puesto}</p>
                    <p>Fecha de Contratación: {empleadoDetail.fecha_contratación}</p>
                    <p>Cumpleaños: {empleadoDetail.cumpleaños}</p>
                    <p>{empleadoDetail.is_on_leave ? 'Está de baja' : 'No está de baja'}</p>
                    <h3>Listado de proyectos</h3>
                    {/* Verificar si existe la propiedad 'proyectos' antes de mapear */}
                    {empleadoDetail.proyectos && empleadoDetail.proyectos.length > 0 ? (

                        <ul>
                            {empleadoDetail.proyectos.map((proyecto) => (
                                <li key={proyecto.id}>
                                    <h3>{proyecto.nombre}</h3>
                                    <p>{proyecto.descripcion}</p>
                                    <p>Fecha de Inicio: {proyecto.fecha_inicio}</p>
                                    <p>Fecha de Fin: {proyecto.fecha_fin || 'En curso'}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Este empleado no está asignado a ningún proyecto.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default DetalleEmpleado;
