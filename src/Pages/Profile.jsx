import React, { useState } from "react";
import { TextField, Button, Avatar, Typography } from "@mui/material";

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
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">My Profile</h1>

      <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
        <div className="flex items-center gap-4">
          <Avatar src={photo} sx={{ width: 64, height: 64 }} />
          <label className="cursor-pointer text-blue-600 hover:underline">
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handlePhotoUpload}
            />
            Change Photo
          </label>
        </div>

        <TextField
          label="Full Name"
          name="name"
          fullWidth
          value={profile.name}
          onChange={handleChange}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          value={profile.email}
          onChange={handleChange}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          value={profile.password}
          onChange={handleChange}
          helperText="Leave blank to keep current password"
        />

        <Button type="submit" variant="contained" fullWidth>
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default Profile;
