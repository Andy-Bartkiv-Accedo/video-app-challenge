import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import { useEffect } from "react";

interface Props {
  listMovie: any[],
  listTV: any[]
}

const AppRouter: React.FC<Props> = ({ listMovie, listTV }) => {

  return (
    <div className="App-body">
        <Routes >
            <Route path="/" element = { <Home listMovie={ listMovie } listTV={ listTV }/> }/>
            <Route path="/details/123" element = { <Details /> }/>
            <Route path="/*" element = { <Navigate replace to="/" /> }/>
        </Routes>
    </div>
  )
}

export default AppRouter;