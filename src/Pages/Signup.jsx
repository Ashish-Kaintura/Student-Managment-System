// src/pages/Signup.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Visibility,
  VisibilityOff,
  Person,
  Email,
  Lock,
} from "@mui/icons-material";
import {
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  CircularProgress,
  Box,
  Paper,
} from "@mui/material";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let temp = {};
    temp.name = form.name ? "" : "Name is required";
    temp.email = /\S+@\S+\.\S+/.test(form.email) ? "" : "Email is not valid";
    temp.password =
      form.password.length >= 6 ? "" : "Password must be at least 6 characters";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // TODO: Firebase/Auth logic
      console.log("Signup form submitted", form);
    }, 1500);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "whitesmoke",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,

        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.07' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 5,
          borderRadius: 4,
          width: "100%",
          maxWidth: 400,
          animation: "fadeIn 0.7s",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          align="center"
          mb={2}
          color="primary"
        >
          Create Account
        </Typography>
        <Typography
          variant="body2"
          align="center"
          mb={3}
          color="text.secondary"
        >
          Sign up to access your student dashboard
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          <TextField
            label="Full Name"
            name="name"
            fullWidth
            required
            value={form.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person color="primary" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            required
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email color="primary" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            fullWidth
            required
            value={form.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password || "At least 6 characters"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock color="primary" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((show) => !show)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{
              mt: 1,
              py: 1.5,
              fontWeight: 600,
              letterSpacing: 1,
              background: "linear-gradient(90deg, #6366f1 0%, #06b6d4 100%)",
              boxShadow: "0 4px 20px 0 rgba(99,102,241,0.15)",
              transition: "0.2s",
              "&:hover": {
                background: "linear-gradient(90deg, #06b6d4 0%, #6366f1 100%)",
              },
            }}
            disabled={loading}
            endIcon={loading && <CircularProgress size={22} color="inherit" />}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>
        <Typography variant="body2" align="center" mt={3}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#6366f1", fontWeight: 500 }}>
            Login
          </Link>
        </Typography>
      </Paper>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </Box>
  );
};

export default Signup;
