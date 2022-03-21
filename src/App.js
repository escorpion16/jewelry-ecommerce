import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Cart, Login, Product, Shop } from "./pages";
import { ProtectedRoutes, LoadingScreen } from "./components/index";
import { useSelector } from "react-redux";

const App = () => {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <div className="App">
      <HashRouter>
        {isLoading && <LoadingScreen />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/Shop" />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
