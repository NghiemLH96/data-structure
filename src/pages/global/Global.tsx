import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./global.scss"
import Menu from "./components/menu/Menu"

export default function Global() {
  return (
    <>
        <Header/>
        <div className="content_truct">
            <Menu></Menu>
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}
