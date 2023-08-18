import React from "react";
import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  CallEnd,
  Favorite,
  MapsUgc,
  MicOff,
  MoreVert,
  PlayCircleOutline,
  Share,
  Star,
  Timer,
} from "@mui/icons-material";



const Feed = () => {
  return (
    <Box bgcolor="" flex={6} p={2}>
      <Card>
        <h2>Music Basic</h2>

        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "black" }} aria-label="recipe">
              <Avatar
                sx={{ width: 37, height: 37 }}
                src="https://images.pexels.com/photos/17634093/pexels-photo-17634093/free-photo-of-uyan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </Avatar>
          }
          subheader=<h4>John Mayer</h4>
        />
        <CardMedia
          component="img"
          height="400px"
          width="400px"
          image="https://images.pexels.com/photos/2960891/pexels-photo-2960891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
          alt="Paella dish"
        />
        <BottomNavigation
          sx={{
            p: "5px 50px",
            margin: "0px 230px ",
            width: "600px",
            height: "55%",
            maxWidth: 360,
            borderRadius: "23px",
            bgcolor: "#e0eae0",
          }}
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<PlayCircleOutline />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<MicOff />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<MoreVert />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<MapsUgc />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<CallEnd />}
          />
        </BottomNavigation>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <IconButton aria-label="add to favorites" color="primary">
              <Star />
            </IconButton>
            50 lessons available <br></br>
            <IconButton aria-label="add to favorites" color="primary">
              <Timer />
            </IconButton>
            Ends in 45 min
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
        <Typography variant="h6" margin={"9px"} color="text.primary">
          Community
        </Typography>

        <Stack direction="row" spacing={0}>
          <Avatar
            sx={{ width: 190, height: 190 }}
            src="https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            sx={{ width: 190, height: 190 }}
            src="https://images.pexels.com/photos/7149172/pexels-photo-7149172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            sx={{ width: 190, height: 190 }}
            src="https://images.pexels.com/photos/3739385/pexels-photo-3739385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            sx={{ width: 190, height: 190 }}
            src="https://images.pexels.com/photos/10380835/pexels-photo-10380835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Avatar
            sx={{ width: 190, height: 190 }}
            src="https://images.pexels.com/photos/8044176/pexels-photo-8044176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Stack>
      </Card>
    </Box>
  );
};

export default Feed;
