import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import Player from "../pages/Player";

const AppRouter: React.FC = () => {

  return (
    <div className="App-body">
        <Routes >
            <Route path="/" element = { <Home /> }/>
            <Route path="/movies" element = { <Movies /> }/>
            <Route path="/tv" element = { <Series /> }/>
            <Route path="/details/:id" element = { <Details /> }/>
            <Route path="/player/:id" element = { <Player /> }/>
            <Route path="/*" element = { <Navigate replace to="/" /> }/>
        </Routes>
    </div>
  )
}

export default AppRouter;