import { Route, Routes } from "react-router-dom";
import Global from "../pages/global/Global";
import Home from "../pages/global/pages/home/Home";
import QuesMng from "../pages/admin/ques-manager/QuesMng";

export default function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Global/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="admin/question-manager" element={<QuesMng/>}></Route>
        </Route>
    </Routes>
  )
}
