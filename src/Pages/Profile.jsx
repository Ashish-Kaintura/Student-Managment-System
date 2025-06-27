import React, { useState } from "react";
import {
  TextField,
  Button,
  Avatar,
  Typography,
  Paper,
  Box,
  IconButton,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Ashish Kaintura",
    email: "ashish@example.com",
    password: "",
  });

  const [photo, setPhoto] = useState(null);

  const handleChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setPhoto(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated (mock)");
  };

  return (
    <Box
      sx={{
        minHeight: "90vh",
        bgcolor: "whitesmoke",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,

        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.07' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 4,
          maxWidth: 400,
          width: "100%",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
        }}
      >
        <Typography variant="h5" fontWeight={700} mb={3} color="primary">
          My Profile
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <Box position="relative">
            <Avatar
              src={photo}
              sx={{
                width: 80,
                height: 80,
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                border: "3px solid #1976d2",
              }}
            />
            <IconButton
              component="label"
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                bgcolor: "white",
                boxShadow: 1,
                "&:hover": { bgcolor: "#e3f2fd" },
              }}
              size="small"
            >
              <PhotoCamera color="primary" fontSize="small" />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handlePhotoUpload}
              />
            </IconButton>
          </Box>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Change Photo
          </Typography>
        </Box>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Full Name"
            name="name"
            fullWidth
            variant="outlined"
            margin="normal"
            value={profile.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            variant="outlined"
            margin="normal"
            value={profile.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
            value={profile.password}
            onChange={handleChange}
            helperText="Leave blank to keep current password"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1.2,
              fontWeight: 600,
              fontSize: "1rem",
              borderRadius: 2,
              boxShadow: "0 2px 8px rgba(25, 118, 210, 0.08)",
            }}
          >
            Save Changes
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Profile;
