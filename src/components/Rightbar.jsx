import React from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,

  Typography,
} from "@mui/material";
import { Home, MenuBook, NoteAlt, Send } from "@mui/icons-material";


import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";



const Rightbar = () => {
  return (
    <Box
      bgcolor="#e3f2dd"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Typography variant="h5" margin={"8px"}>
        Music Chat
      </Typography>

      <List
        sx={{
          width: "100%",
          height: "55%",
          maxWidth: 360,
          borderRadius: "23px",
          bgcolor: "background.paper",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Travis Howard"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Cindy Baker"
              src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Paper
          component="form"
          sx={{
            p: "2px 2px",
            margin: "182px 2px",
            display: "flex",
            alignItems: "center",
            borderRadius: "90px",
            width: 283,
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="comments"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <Send />
          </IconButton>
        </Paper>
      </List>

      <List
        sx={{
          width: "100%",
          height: "37%",
          maxWidth: 360,
          borderRadius: "23px",
          bgcolor: "background.paper",
        }}
      >
        <box>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#simple-list">
              <ListItemIcon>
                <MenuBook color="primary" />
              </ListItemIcon>
              <ListItemText primary="Important Practices" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton componenet="a" href="#home">
              <ListItemIcon>
                <Home color="primary" />
              </ListItemIcon>
              <ListItemText primary="Assignments" />
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
        </box>
      </List>
    </Box>
  );
};

export default Rightbar;
