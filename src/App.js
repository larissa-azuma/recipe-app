import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recipe from "./pages/recipe";
import Recipes from "./pages/recipes";
import AddRecipe from "./pages/add-Recipe";




const router =createBrowserRouter([
  {path:"/", element: <Recipes />},
  {path:"/recipes",element: <Recipes/>},
  { path:"/recipes/:id", element: <Recipe />},
  { path:"/add-recipe", element: <AddRecipe />}
]);
function App() {
  return  <RouterProvider router={router} /> 

}

export default App;
