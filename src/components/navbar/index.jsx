import{AppBar,Button,Toolbar,Typography} from "@mui/material"
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <AppBar position="static">
        <Toolbar>
          <Typography  color="inherit"  to="/recipes" variant="h6" component={Link} sx={{ flexGrow: 1 }}>
            Recipe App
          </Typography>
          <Button to ="/add-recipe" variant="contained"  component={Link} color ="primary"> Add New Recipes</Button>
        </Toolbar>
      </AppBar>
    );
}
