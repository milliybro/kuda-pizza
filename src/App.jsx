import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import CartPage from "./pages/CartPage";
import FavouritePage from "./pages/FavouritePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="favourite" element={<FavouritePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
