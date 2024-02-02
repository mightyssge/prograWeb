import {useEffect, useState} from "react";
import { Container, TextField, Button, Typography, alpha } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './style.css';


const RegisterPage = () => {
  const [usuarios, setUsuarios] = useState([]);

  const navigate = useNavigate();  
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Verifica si el usuario está autenticado al cargar la página de películas
  
  const obtenerUsuarios = async () => {
    const response = await fetch ("/usuario.json");
    const data = await response.json()
    setUsuarios(data)
}
useEffect(() => {
  const user = sessionStorage.getItem("user");
    if (user){
      navigate("/home");
    }
    obtenerUsuarios()
}, [navigate]);

  const handleRegister = (e) => {
    e.preventDefault();

    // Validaciones
    if (!nombre || !apellidos || !correo || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // Verificar si el correo ya existe
    const correoExistente = usuarios.some((usuario) => usuario.correo === correo);
    if (correoExistente) {
      setError("El correo ya está registrado");
      return;
    }

    // Verificar si el correo es institucional
    if (!correo.endsWith("@aloe.ulima.edu.pe")) {
      setError("Debes usar un correo institucional");
      return;
    }

    // Si todas las validaciones pasan, puedes continuar con el registro
    const nuevoUsuario = {
      nombre,
      apellidos,
      correo,
      password,
    };

    const nuevosUsuarios = [...usuarios, nuevoUsuario];

  // Almacenar la nueva lista de usuarios en sessionStorage
  sessionStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));

  // Redirige al usuario a la página de login después de un registro exitoso
  navigate("/login");

  console.log("Usuario registrado:", nuevoUsuario);
  console.log("Usuarios actualizados:", nuevosUsuarios);
};

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: alpha("#FA7525", 0.3),
        padding: "20px"
      }}
    >
      <Typography
        className="titulo1"
        variant="h1"
        align="center"
        sx={{
          marginBottom: 5,
          color: "#000",
          fontSize: '120px',
        }}
      >
        SALAS DE CINE ULIMA
      </Typography>

      <Container
        sx={{
          width: "80%",
          maxWidth: "500px",
          marginBottom: 5,
          '@media (min-width:600px)': {
            width: "40%",
          },
          backgroundColor: "white",
          p: "20px",
          borderRadius: 2,
        }}
      >
        <form
          onSubmit={handleRegister}
          sx={{
            background: "white",
            borderRadius: 1,
          }}
        >
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 3 }}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <TextField
            label="Apellidos"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 3 }}
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
          />
          <TextField
            label="Correo"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 3 }}
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            fullWidth
            type="password"
            sx={{ marginBottom: 3 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirmar Contraseña"
            variant="outlined"
            fullWidth
            type="password"
            sx={{ marginBottom: 3 }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{ marginBottom: 2, textAlign: "center" }}
            >
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="warning"
            fullWidth
            sx={{
              marginTop: 2,
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: 0.46,
              backgroundColor: "#FA7525",
            }}
          >
            REGISTRARSE
          </Button>
        </form>
      </Container>
    </Container>
  );
};

export default RegisterPage;
