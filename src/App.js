import "./App.css";
// import { DetailMovie } from "./pages/DetailMovie";
// import { Homepage } from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import ProtectedRoute from "./components/ProtectedRoute";

import Navbar from "./components/Navbar";
import theme from "./themes/theme";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import { DetailTv } from "./pages/DetailTv";
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
               
                <Footer />
              </>
            }
          />
          <Route
            path="/klasemen"
            element={
              <>
                <Navbar />
               
                <Footer />
              </>
            }
          />
          <Route
            path="/livescore"
            element={
              <>
                <Navbar />
              
                <Footer />
              </>
            }
          />
          <Route
            path="/berita"
            element={
              <>
                <Navbar />
             
                <Footer />
              </>
            }
          />
          <Route
            path="/transfer"
            element={
              <>
                <Navbar />
               
                <Footer />
              </>
            }
          />
          <Route
            path="login"
            element={
              <ProtectedRoute loginOnly={false}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRoute loginOnly={false}>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <Navbar />
                
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tv/:id"
            element={
              <ProtectedRoute>
                <Navbar />
              
                <Footer />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
