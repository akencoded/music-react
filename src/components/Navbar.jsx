import {
  AppBar,
  Avatar,
  IconButton,
  InputBase,
  Paper,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ChatBubbleOutline, MusicNote, MusicVideo } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  width: "40",
  justifyContent: "space-between",
  backgroundColor: "#e0eae0",
});

const Icons = styled("div")(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  gap: "20px",
}));

const Navbar = () => {
  return (
    <AppBar position="stick">
      <StyledToolbar>
        <Typography variant="h4" color={"black"}>
          <b>Music Lesson</b>
        </Typography>

        <Paper
          component="form"
          sx={{
            p: "3px 5px",
            margin: "1px 2px",
            display: "flex",
            alignItems: "center",
            borderColor: "black",
            borderRadius: "90px",
            width: 290,
          }}
        >
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="search for songs or music"
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        <Icons>
          <Stack
            direction="row"
            color={"black"}
            spacing={3}
            justifyContent="space-between"
          >
            <MusicNote fontSize="small"></MusicNote>
            <MusicVideo fontSize="small" color="dark"></MusicVideo>
            <ChatBubbleOutline
              fontSize="small"
              color="dark"
            ></ChatBubbleOutline>
          </Stack>

          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/17634093/pexels-photo-17634093/free-photo-of-uyan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
