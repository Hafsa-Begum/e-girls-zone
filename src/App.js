import {
  BrowserRouter, Routes,
  Route
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomeScreen />} />

          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
