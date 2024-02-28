import { useState } from "react";
import { Container, TextField, Button, Typography, alpha } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();  
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validaciones del formulario
    if (!nombre || !apellidos || !correo || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/cines/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre,
          apellidos: apellidos,
          correo: correo,
          password: password,
        }),
      });

      if (response.ok) {
        // Registro exitoso, redirige al usuario a la página de inicio de sesión
        navigate('/login');
      } else {
        // Error en el registro
        const data = await response.json();
        setError(data.msg || "Error en el registro");
      }
    } catch (error) {
      setError("Error en el servidor. Inténtalo de nuevo más tarde.");
    }
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
