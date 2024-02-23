import { Card, CardContent, CardMedia, Container,Grid,TextField, Typography } from "@mui/material";

export default function Recipes () {
    return(
        <Container sx={{my: "2rem"}}  maxWidth="sm">
            <TextField fullWidth 
            id="outlined-basic" 
            label="Enter a keyword to search recipes and hit enter" 
            variant="outlined" />   

            <Grid sx={{mt: "1rem"}} container spacing={3}>
                <Grid item xs={4}>
                    <Card>
                        <CardMedia 
                        component= "img"
                        image="https://media.istockphoto.com/id/1439228262/photo/delicious-fried-oyster-mushrooms-and-shiitake-mushrooms-with-vegetables-in-a-spicy-sauce.webp?b=1&s=170667a&w=0&k=20&c=BaqOX8X33AzXY0Km5BZ-5dQloPRuzR11dTCYwJn-k30="
                                />
        
                    </Card>
                    <CardContent>
                        <Typography variant="h5">Recipe App</Typography>
                    </CardContent>
                </Grid>
              </Grid>                
        </Container>
    );

}
