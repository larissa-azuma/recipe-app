import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useEffect, useState } from "react";
import emptyIcon from "../../assets/images/empty.svg";
import loadingIcon from "../../assets/images/infinite-spinner.svg";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const getRecipes = () => {
    setLoading(true);
    //prepare URL
    // const url = new URL(" https://api.spoonacular.com/recipes/complexSearch");
    const url = new URL(`${process.env.REACT_APP_RECIPE_API_URL}/recipes`);
    // url.searchParams.append(
    //   "apiKey",
    //   process.env.REACT_APP_SPOONACULAR_API_KEY
    // );
    // url.searchParams.append("query", keyword);
    // fetch recipes from API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // update recipes state
        // setRecipes(data.results);
        setRecipes(data);
        // console.log (error);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(getRecipes, [keyword]);

  return (
    <>
      <Navbar />
      <Container sx={{ my: "2rem" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Enter a keyword to search recipes and hit enter"
          variant="outlined"
          onKeyDown={(event) =>
            event.key === "Enter" && setKeyword(event.target.value)
          }
        />
        <Grid sx={{ mt: "1rem" }} container spacing={3}>
          {loading ? (
            <img src={loadingIcon} width="50%" />
          ) : recipes.length > 0 ? (
            recipes.map((recipe) => (
              <Grid key={recipe._id} item xs={4}>
                <Card sx={{ maxWidth: 345, height: "100%" }}>
                  <CardActionArea sx={{ height: "100%" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={`${process.env.REACT_APP_RECIPE_API_URL}/images/${recipe.image}`}
                      alt={recipe.title}
                    />
                    <CardContent>
                      <Link to={`/recipes/${recipe._id}`}>
                        <Typography gutterBottom variant="h5" component="div">
                          {recipe.title}
                        </Typography>
                      </Link>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          ) : (
            <img src={emptyIcon} width={"50%"} />
          )}
        </Grid>
      </Container>
    </>
  );
}
