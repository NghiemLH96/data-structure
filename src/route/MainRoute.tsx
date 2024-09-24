import { Route, Routes } from "react-router-dom";
import Global from "../pages/global/Global";
import Home from "../pages/global/pages/home/Home";
import QuesMng from "../pages/admin/ques-manager/QuesMng";
import QuesTable from "../pages/admin/ques-manager/components/ques-table/QuesTable";
import QuesAdd from "../pages/admin/ques-manager/components/ques-table/QuesAdd";
import QuesEdit from "../pages/admin/ques-manager/components/ques-table/QuesEdit";

export default function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Global/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="admin/question-manager" element={<QuesMng/>}>
                <Route path="list" element={<QuesTable/>}></Route>
                <Route path="add-new" element={<QuesAdd/>}></Route>
                <Route path="edit" element={<QuesEdit/>}></Route>
            </Route>
        </Route>
    </Routes>
  )
}
