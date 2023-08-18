import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  GridView,
  Home,
  Logout,
  NoteAlt,
  PeopleAlt,
  Settings,
  Storefront,
  Verified,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box
      color="white"
      bgcolor="black"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton componenet="a" href="#home">
            <ListItemIcon>
              <Home color="primary" />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton componenet="a" href="#simple-list">
            <ListItemIcon>
              <GridView color="primary" />
            </ListItemIcon>
            <ListItemText primary="Practices" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton componenet="a" href="feednav.jsx">
            <ListItemIcon>
              <Storefront color="primary" />
            </ListItemIcon>
            <ListItemText primary="Courses" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton componenet="a" href="#simple-list">
            <ListItemIcon>
              <Verified color="primary" />
            </ListItemIcon>
            <ListItemText primary="Progress" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton componenet="a" href="#simple-list">
            <ListItemIcon>
              <PeopleAlt color="primary" />
            </ListItemIcon>
            <ListItemText primary="Instructors" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton componenet="a" href="#simple-list">
            <ListItemIcon>
              <NoteAlt color="primary" />
            </ListItemIcon>
            <ListItemText primary="Music Notes" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider
        sx={{
          p: "0px 90px",
          margin: "80px 10px ",
          borderRadius: "23px",
          bgcolor: "white",
        }}
      />
      <List>
        <ListItem disablePadding>
          <ListItemButton componenet="a" href="#simple-list">
            <ListItemIcon>
              <Settings color="primary" />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton componenet="a" href="#simple-list">
            <ListItemIcon>
              <Logout color="primary" />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
