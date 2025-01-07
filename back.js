// Importar los módulos necesarios
const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt'); // Módulo para el hash de contraseñas
const cors = require('cors');
const multer = require('multer'); // Módulo para manejar la carga de archivos
const path = require('path');

// Configuración de la aplicación Express
const app = express();

// Middleware para parsear JSON en el cuerpo de las solicitudes
app.use(express.json());

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: '127.0.0.1', // Host del servidor MySQL
    user: 'root',      // Usuario de MySQL
    password: '',      // Contraseña de MySQL
    database: 'tempopdb' // Nombre de la base de datos
});

// Configuración de CORS más flexible
const corsOptions = {
    origin: 'http://localhost:3000', // Permitir solo solicitudes de localhost:3000
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permitir los métodos necesarios
    allowedHeaders: ['Content-Type', 'Authorization'], // Permitir cabeceras específicas
    credentials: true // Si usas cookies o tokens, habilitar credenciales
};

app.use(cors(corsOptions)); // Usar esta configuración en lugar de `app.use(cors())`

// Conectar a la base de datos MySQL
db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL.');
});

// Configuración de almacenamiento de `multer`
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Asegúrate de tener este directorio creado
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);  // Obtener la extensión del archivo
        cb(null, Date.now() + ext);  // Asignar un nombre único
    }
});

// Inicializar `multer` con la configuración de almacenamiento
const upload = multer({ storage: storage });

// Endpoint para registrar un usuario
app.post('/api/registrar-usuario', async (req, res) => {
    const { usuario, nombre, correo, tipo, contraseña } = req.body;

    // Validar que todos los campos están presentes
    if (!usuario || !nombre || !correo || !tipo || !contraseña) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Validar el tipo de usuario
    if (tipo !== 'Candidato' && tipo !== 'Reclutador') {
        return res.status(400).json({ error: 'El tipo de usuario debe ser "Candidato" o "Reclutador".' });
    }

    try {
        // Encriptar la contraseña usando bcrypt
        const hashedPassword = await bcrypt.hash(contraseña, 10); // El número 10 indica el número de rondas de hash

        // Insertar el usuario en la base de datos
        const query = 'INSERT INTO usuarios (usuario, nombre, correo, tipo, contraseña) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [usuario, nombre, correo, tipo, hashedPassword], (err, result) => {
            if (err) {
                console.error('Error al registrar el usuario:', err);
                return res.status(500).json({ error: 'Error al registrar el usuario.' });
            }
            res.status(201).json({ message: 'Usuario registrado con éxito.', userId: result.insertId });
        });
    } catch (error) {
        console.error('Error al encriptar la contraseña:', error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
});

// Endpoint para iniciar sesión
app.post('/api/iniciar-sesion', (req, res) => {
    const { usuario, contraseña } = req.body;

    // Validar que los campos están presentes
    if (!usuario || !contraseña) {
        return res.status(400).json({ error: 'Usuario y contraseña son obligatorios.' });
    }

    // Buscar al usuario en la base de datos
    const query = 'SELECT * FROM usuarios WHERE usuario = ?';
    db.query(query, [usuario], async (err, results) => {
        if (err) {
            console.error('Error al buscar el usuario:', err);
            return res.status(500).json({ error: 'Error interno del servidor.' });
        }

        // Verificar si el usuario existe
        if (results.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }

        const user = results[0]; // Obtener el usuario encontrado

        try {
            // Comparar la contraseña proporcionada con la contraseña encriptada almacenada
            const isMatch = await bcrypt.compare(contraseña, user.contraseña);
            if (!isMatch) {
                return res.status(401).json({ error: 'Contraseña incorrecta.' });
            }

            // Si la contraseña coincide, devolver una respuesta exitosa
            res.status(200).json({ message: 'Inicio de sesión exitoso.', userId: user.id_usuario });
        } catch (error) {
            console.error('Error al verificar la contraseña:', error);
            res.status(500).json({ error: 'Error interno del servidor.' });
        }
    });
});

// Endpoint para subir los datos del perfil
app.post('/api/subir-datos-perfil', upload.fields([{ name: 'profileImage' }, { name: 'CVS' }]), (req, res) => {
    const { descripcion, habilidades, experiencia, contacto, id_usuario } = req.body; // Asegúrate de recibir el id_usuario del cliente
    const { profileImage, CVS } = req.files;

    // Validar que los campos obligatorios están presentes
    if (!descripcion || !habilidades || !experiencia || !contacto || !id_usuario) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios, incluido el ID de usuario.' });
    }

    // Procesar los archivos (si existen)
    const profileImagePath = profileImage ? profileImage[0].filename : null;
    const cvFilePath = CVS ? CVS[0].filename : null;

    // Guardar los datos en la base de datos
    const query = `
        INSERT INTO perfiles (id_usuario, descripcion, habilidades, experiencia, contacto, cv, foto_perfil)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [
        id_usuario,
        descripcion,
        habilidades, // JSON.stringify puede ser innecesario si el cliente ya envía un string válido
        experiencia, // Lo mismo para experiencia
        contacto,    // Lo mismo para contacto
        cvFilePath,
        profileImagePath
    ], (err, result) => {
        if (err) {
            console.error('Error al guardar los datos del perfil:', err);
            return res.status(500).json({ error: 'Error al guardar el perfil.' });
        }

        res.status(201).json({ message: 'Perfil guardado correctamente.', perfilId: result.insertId });
    });
});

// Iniciar el servidor en el puerto 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
