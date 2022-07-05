import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";

const AppRouter: React.FC = () => {
  return (
    <div className="App-body">
        <Routes >
            <Route path="/" element = { <Home /> }/>
            <Route path="/details/123" element = { <Details /> }/>
            <Route path="/*" element = { <Navigate replace to="/" /> }/>
        </Routes>
    </div>
  )
}

export default AppRouter;