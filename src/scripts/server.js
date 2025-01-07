// // Importar los módulos necesarios
// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const bcrypt = require('bcrypt'); // Módulo para el hash de contraseñas

// // Configuración de la aplicación Express
// const app = express();
// app.use(bodyParser.json()); // Middleware para parsear JSON en el cuerpo de las solicitudes

// // Configuración de la conexión a la base de datos MySQL
// const db = mysql.createConnection({
//     host: 'localhost', // Host del servidor MySQL
//     user: 'root',      // Usuario de MySQL
//     password: '',      // Contraseña de MySQL
//     database: 'tempopdb' // Nombre de la base de datos
// });

// // Conectar a la base de datos MySQL
// db.connect(err => {
//     if (err) {
//         console.error('Error al conectar a la base de datos:', err);
//         return;
//     }
//     console.log('Conectado a la base de datos MySQL.');
// });

// // Endpoint para registrar un usuario
// app.post('/api/registrar-usuario', async (req, res) => {
//     const { usuario, nombre, correo, tipo, contraseña } = req.body;

//     // Validar que todos los campos están presentes
//     if (!usuario || !nombre || !correo || !tipo || !contraseña) {
//         return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
//     }

//     // Validar el tipo de usuario
//     if (tipo !== 'Candidato' && tipo !== 'Reclutador') {
//         return res.status(400).json({ error: 'El tipo de usuario debe ser "Candidato" o "Reclutador".' });
//     }

//     try {
//         // Encriptar la contraseña usando bcrypt
//         const hashedPassword = await bcrypt.hash(contraseña, 10); // El número 10 indica el número de rondas de hash

//         // Insertar el usuario en la base de datos
//         const query = 'INSERT INTO usuarios (usuario, nombre, correo, tipo, contraseña) VALUES (?, ?, ?, ?, ?)';
//         db.query(query, [usuario, nombre, correo, tipo, hashedPassword], (err, result) => {
//             if (err) {
//                 console.error('Error al registrar el usuario:', err);
//                 return res.status(500).json({ error: 'Error al registrar el usuario.' });
//             }
//             res.status(201).json({ message: 'Usuario registrado con éxito.', userId: result.insertId });
//         });
//     } catch (error) {
//         console.error('Error al encriptar la contraseña:', error);
//         res.status(500).json({ error: 'Error interno del servidor.' });
//     }
// });

// // Endpoint para iniciar sesión
// app.post('/api/iniciar-sesion', (req, res) => {
//     const { usuario, contraseña } = req.body;

//     // Validar que los campos están presentes
//     if (!usuario || !contraseña) {
//         return res.status(400).json({ error: 'Usuario y contraseña son obligatorios.' });
//     }

//     // Buscar al usuario en la base de datos
//     const query = 'SELECT * FROM usuarios WHERE usuario = ?';
//     db.query(query, [usuario], async (err, results) => {
//         if (err) {
//             console.error('Error al buscar el usuario:', err);
//             return res.status(500).json({ error: 'Error interno del servidor.' });
//         }

//         // Verificar si el usuario existe
//         if (results.length === 0) {
//             return res.status(404).json({ error: 'Usuario no encontrado.' });
//         }

//         const user = results[0]; // Obtener el usuario encontrado

//         try {
//             // Comparar la contraseña proporcionada con la contraseña encriptada almacenada
//             const isMatch = await bcrypt.compare(contraseña, user.contraseña);
//             if (!isMatch) {
//                 return res.status(401).json({ error: 'Contraseña incorrecta.' });
//             }

//             // Si la contraseña coincide, devolver una respuesta exitosa
//             res.status(200).json({ message: 'Inicio de sesión exitoso.', userId: user.id_usuario });
//         } catch (error) {
//             console.error('Error al verificar la contraseña:', error);
//             res.status(500).json({ error: 'Error interno del servidor.' });
//         }
//     });
// });

// // Endpoint para obtener todas las vacantes
// app.get('/api/vacantes', (req, res) => {
//     const query = ` 
//         SELECT vacantes.id_vacante, vacantes.titulo, vacantes.descripcion, vacantes.clase_vacante,
//                vacantes.salario, vacantes.fecha_publicacion, usuarios.nombre AS reclutador
//         FROM vacantes
//         INNER JOIN usuarios ON vacantes.id_usuario = usuarios.id_usuario
//     `;
//     db.query(query, (err, results) => {
//         if (err) {
//             console.error('Error al obtener las vacantes:', err);
//             return res.status(500).json({ error: 'Error interno del servidor.' });
//         }
//         res.status(200).json(results);
//     });
// });

// // Endpoint para obtener los detalles de una vacante específica
// app.get('/api/vacantes/:id', (req, res) => {
//     const { id } = req.params;

//     // Consulta para obtener los detalles de la vacante y sus requisitos
//     const query = ` 
//         SELECT vacantes.id_vacante, vacantes.titulo, vacantes.descripcion, vacantes.clase_vacante,
//                vacantes.salario, vacantes.fecha_publicacion, usuarios.nombre AS reclutador
//         FROM vacantes
//         INNER JOIN usuarios ON vacantes.id_usuario = usuarios.id_usuario
//         WHERE vacantes.id_vacante = ?
//     `;
//     const requisitosQuery = `
//         SELECT descripcion
//         FROM requisitos
//         WHERE id_vacante = ?
//     `;

//     db.query(query, [id], (err, vacanteResults) => {
//         if (err) {
//             console.error('Error al obtener la vacante:', err);
//             return res.status(500).json({ error: 'Error interno del servidor.' });
//         }

//         if (vacanteResults.length === 0) {
//             return res.status(404).json({ error: 'Vacante no encontrada.' });
//         }

//         db.query(requisitosQuery, [id], (err, requisitosResults) => {
//             if (err) {
//                 console.error('Error al obtener los requisitos:', err);
//                 return res.status(500).json({ error: 'Error interno del servidor.' });
//             }

//             // Combinar los datos de la vacante con los requisitos
//             const vacante = vacanteResults[0];
//             vacante.requisitos = requisitosResults.map(r => r.descripcion);
//             res.status(200).json(vacante);
//         });
//     });
// });

// // Endpoint para crear una nueva vacante
// app.post('/api/vacantes', (req, res) => {
//     const { id_usuario, titulo, descripcion, clase_vacante, salario, requisitos } = req.body;

//     // Validar los campos necesarios
//     if (!id_usuario || !titulo || !clase_vacante || !salario || !Array.isArray(requisitos)) {
//         return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
//     }

//     // Insertar la vacante
//     const query = ` 
//         INSERT INTO vacantes (id_usuario, titulo, descripcion, clase_vacante, salario)
//         VALUES (?, ?, ?, ?, ?)
//     `;
//     db.query(query, [id_usuario, titulo, descripcion, clase_vacante, salario], (err, result) => {
//         if (err) {
//             console.error('Error al crear la vacante:', err);
//             return res.status(500).json({ error: 'Error al crear la vacante.' });
//         }

//         const vacanteId = result.insertId;

//         // Insertar los requisitos asociados a la vacante
//         const requisitosQuery = `
//             INSERT INTO requisitos (id_vacante, descripcion)
//             VALUES ?
//         `;
//         const requisitosValues = requisitos.map(req => [vacanteId, req]);

//         db.query(requisitosQuery, [requisitosValues], (err) => {
//             if (err) {
//                 console.error('Error al insertar los requisitos:', err);
//                 return res.status(500).json({ error: 'Error al insertar los requisitos.' });
//             }

//             res.status(201).json({ message: 'Vacante creada con éxito.', vacanteId });
//         });
//     });
// });

// // Endpoint para calificar a un usuario o vacante
// app.post('/api/calificaciones', (req, res) => {
//     const { id_usuario, id_vacante, calificacion, comentario } = req.body;

//     // Validar que los campos necesarios están presentes
//     if ((!id_usuario && !id_vacante) || !calificacion) {
//         return res.status(400).json({ error: 'Debe proporcionarse un id_usuario o id_vacante, y una calificación.' });
//     }

//     if (calificacion < 1 || calificacion > 5) {
//         return res.status(400).json({ error: 'La calificación debe estar entre 1 y 5.' });
//     }

//     const query = `
//         INSERT INTO calificaciones (id_usuario, id_vacante, calificacion, comentario)
//         VALUES (?, ?, ?, ?)
//     `;
//     db.query(query, [id_usuario || null, id_vacante || null, calificacion, comentario], (err, result) => {
//         if (err) {
//             console.error('Error al registrar la calificación:', err);
//             return res.status(500).json({ error: 'Error al registrar la calificación.' });
//         }
//         res.status(201).json({ message: 'Calificación registrada con éxito.', calificacionId: result.insertId });
//     });
// });

// // Endpoint para obtener calificaciones por usuario o vacante
// app.get('/api/calificaciones', (req, res) => {
//     const { id_usuario, id_vacante } = req.query;

//     // Validar que al menos uno de los parámetros esté presente
//     if (!id_usuario && !id_vacante) {
//         return res.status(400).json({ error: 'Debe proporcionarse un id_usuario o id_vacante.' });
//     }

//     const query = `
//         SELECT calificacion, comentario, fecha_calificacion
//         FROM calificaciones
//         WHERE id_usuario = ? OR id_vacante = ?
//     `;
//     db.query(query, [id_usuario || null, id_vacante || null], (err, results) => {
//         if (err) {
//             console.error('Error al obtener las calificaciones:', err);
//             return res.status(500).json({ error: 'Error interno del servidor.' });
//         }
//         res.status(200).json(results);
//     });
// });

// // Iniciar el servidor en el puerto 3000
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });
