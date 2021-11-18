import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Chip, Grid } from "@mui/material";
import CircularPercent from "../components/statisc/CircularPercent";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";

/* Material */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import StarIcon from "@mui/icons-material/Star";
import CallMadeIcon from "@mui/icons-material/CallMade";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
/* Controller  */

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Statics = ({ open, setOpen, dataPlayer }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullWidth="sm"
      maxWidth="sm"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Grid container spacing={2}>
              <Grid item lg>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {dataPlayer.name}
                </Typography>
              </Grid>
              <Grid item>
                <Chip label={`Posição: ${dataPlayer.position}`} />
              </Grid>
              <Grid item>
                <Chip
                  label={`Perna: ${
                    dataPlayer.foot
                      ? dataPlayer.foot === "Right"
                        ? "Direita"
                        : "Esquerda"
                      : ""
                  }`}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <DialogContent>
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid item lg={6}>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <StarIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Avaliação"
                  secondary={<Chip label={dataPlayer.rating} />}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CallMadeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Taxa de Ataque"
                  secondary={<Chip label={dataPlayer.attack_work_rate} />}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AddModeratorIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Taxa de Defesa"
                  secondary={<Chip label={dataPlayer.defense_work_rate} />}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DoubleArrowIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Ritmo"
                  secondary={<Chip label={dataPlayer.pace} />}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={6}>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <SportsSoccerIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Chute"
                  secondary={<Chip label={dataPlayer.shooting} />}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <SportsSoccerIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Passe"
                  secondary={<Chip label={dataPlayer.passing} />}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DirectionsWalkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Fisico"
                  secondary={<Chip label={dataPlayer.physicality} />}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <SportsSoccerIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Drible"
                  secondary={<Chip label={dataPlayer.dribbling} />}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </Grid>
        </Grid>
        {/* <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Statics;
