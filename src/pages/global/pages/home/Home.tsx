import "./home.scss"
import DemoBarChart from "./components/GeneralChart.tsx"
import { PlusOutlined } from "@ant-design/icons"

export default function home() {
  return (
    <div className="home__container">
      <section className="home__section">
        <div className="lesson__container">
            <div className="lessonBox lesson1">
              <h4 className="lesson__title">Chương 1</h4>
              <p className="lesson__subTitle">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="lessonBox lesson2">
              <h4 className="lesson__title">Chương 2</h4>
              <p className="lesson__subTitle">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="lessonBox lesson3">
              <h4 className="lesson__title">Chương 3</h4>
              <p className="lesson__subTitle">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="lessonBox lesson4">
              <h4 className="lesson__title">Chương 4</h4>
              <p className="lesson__subTitle">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="lessonBox lesson5">
              <h4 className="lesson__title">Chương 5</h4>
              <p className="lesson__subTitle">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="lessonBox addBox">
                <PlusOutlined />
            </div>
        </div>
        <div className="chart__container">
          <DemoBarChart/>
        </div>
      </section>
      <section  className="home__section">
          <div className="noti__container">
            <div className="noti__navlink">
              <a href="" className="noti__navItem active">Thông báo</a>
              <a href="" className="noti__navItem">Thông tin</a>
              <a href="" className="noti__navItem">Hướng dẫn</a>
            </div>
            <div className="noti__content__container">
              <div className="noti__content">
                <i className="noti__time">20-09-2024</i>
                <p className="noti__link">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores consequatur tempore tenetur quam </p>
                <a className="noti__detail" href="">Xem chi tiết</a>
              </div>
              <hr />
              <div className="noti__content">
                <i className="noti__time">20-09-2024</i>
                <p className="noti__link">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores consequatur tempore tenetur quam </p>
                <a className="noti__detail" href="">Xem chi tiết</a>
              </div>
              <hr />
              <div className="noti__content">
                <i className="noti__time">20-09-2024</i>
                <p className="noti__link">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores consequatur tempore tenetur quam </p>
                <a className="noti__detail" href="">Xem chi tiết</a>
              </div>
              <hr />
            </div>

          </div>
      </section>
    </div>
  )
}
