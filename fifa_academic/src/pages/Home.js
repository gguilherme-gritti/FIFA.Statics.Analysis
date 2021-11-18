/* React  */
import React, { useContext, useEffect, useState } from "react";

/* Router */
import { useHistory } from "react-router";

/* Context */
import { FifaContext } from "./contexts/FifaContext";

/* Our Components */
import TextInput from "../components/inputs/TextInput";

/* Material */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Skeleton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import Slide from "@mui/material/Slide";

/* Controller  */
import useHomeController from "./controllers/HomeController";
import { HomeContainer, Main, Panel, Team } from "./styles/Home";
import { Chip, Container, FormControl, Grid, Paper } from "@mui/material";
import { playerImage } from "../repositories/fifa/PlayerRep";
import Statics from "./Statics";

const imgs = [
  "https://www.seekpng.com/png/detail/607-6072606_silhueta-jogador-de-futebol-png-clipart-2018-world.png",
  "https://img2.gratispng.com/20180527/kxs/kisspng-football-player-silhouette-clip-art-football-player-cartoon-5b0a73e4158387.0300756015274116840881.jpg",
  "https://img2.gratispng.com/20180404/bye/kisspng-football-manager-2017-silhouette-football-player-football-players-5ac4c3691fb0f4.2917323315228445211298.jpg",
  "https://w7.pngwing.com/pngs/805/301/png-transparent-wall-decal-football-player-american-football-sticker-football-sport-hand-sticker.png",
  "https://img2.gratispng.com/20180708/rua/kisspng-silhouette-clip-art-dancers-silhouette-5b42694a5f5dd0.4857676015310789863906.jpg",
];

/* View */
const Home = () => {
  const {
    fifa,
    setFifa,
    loading,
    setLoading,
    players,
    setPlayers,
    images,
    setImages,
  } = useContext(FifaContext);
  const { handleSearch, getBase64 } = useHomeController();

  const [open, setOpen] = useState(false);
  const [dataPlayer, setDataPlayer] = useState([]);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleClickOpen = (dataPlayer) => {
    console.log(dataPlayer);
    setDataPlayer(dataPlayer);
    setOpen(true);
  };

  return (
    <>
      {open && (
        <Statics open={open} setOpen={setOpen} dataPlayer={dataPlayer} />
      )}
      <Main>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Grid container spacing={2}>
                <Grid item lg>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Estatísticas Jogadores FIFA | Home Page
                  </Typography>
                </Grid>
                <Grid item>
                  <Button color="inherit" variant="outlined">
                    Home
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Box>
        <HomeContainer>
          <Container maxWidth="xl">
            <Grid container spacing={4}>
              <Grid item lg={6} xs={12}>
                <Panel sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    image="https://www.internetmatters.org/wp-content/uploads/2021/05/FIFA-2021-image-1200-630.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Estatísticas
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Pagina Acadêmica Voltada a Consultas de Jogadores FIFA e
                      Suas Estatísticas
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained">
                      Ir ao Site Oficial
                    </Button>
                    <Button size="small" variant="contained">
                      Mais Informações
                    </Button>
                  </CardActions>
                </Panel>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Panel sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    image="https://data4.origin.com/asset/content/dam/originx/web/app/games/fifa/fifa-20/gdp/FIFA20_playerApparel_premiereFeature_3840x1600_003.jpg/5c33ed2c-fc97-47db-8a83-ba168da3b2fb/original.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Jogadores
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Obtenha Informações a respeito dos Jogadores para montar
                      seu time da melhor forma competitiva
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained">
                      Saiba Como
                    </Button>
                  </CardActions>
                </Panel>
              </Grid>
              <Grid item xs={10} lg={11}>
                <Paper elevation={2}>
                  <TextInput
                    variant="filled"
                    label="Selecione um Jogador!"
                    disabled
                  />
                </Paper>
              </Grid>
              <Grid item xs={2} lg={1}>
                <Button variant="contained">
                  <NavigateNextIcon />
                </Button>
              </Grid>
              {players.map((row, key) => (
                <Grid item lg={4} xs={6} key={key}>
                  {loading ? (
                    <Skeleton variant="rectangular" height={110} />
                  ) : (
                    <Card
                      sx={{ display: "flex" }}
                      onClick={() => {
                        handleClickOpen(row);
                      }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Typography component="div" variant="h5">
                            {row.name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                          >
                            Idade: {row.age}
                          </Typography>
                        </CardContent>
                      </Box>
                      <CardMedia
                        sx={{ height: 150 }}
                        component="img"
                        image={imgs[parseInt(Math.random() * (5 - 1) + 1)]}
                      />
                    </Card>
                  )}
                </Grid>
              ))}
            </Grid>
          </Container>
        </HomeContainer>
      </Main>
    </>
  );
};

export default Home;
