// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes/route";
import ShowFilter from "./Components/Header/Filter/ShowFilter/ShowFilter";

function App() {
  return (
    <BrowserRouter>
      <ShowFilter />
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.url} element={route.component} key={index} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
