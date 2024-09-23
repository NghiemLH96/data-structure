import "./header.scss"

export default function Header() {
  return (
    <section className="header">

      <section className="hd-lft">
        <h2 className="logo">Logo</h2>
        {/*
        <ul className="navList">
          <li className="navItem">
            <span className="navText">Home</span>
            <div className="navEff left"></div>
            <div className="navEff right"></div>
          </li>
          <li className="navItem">
            <span className="navText">Testing</span>
            <div className="navEff left"></div>
            <div className="navEff right"></div>
          </li>
          <li className="navItem">
            <span className="navText">Books</span>
            <div className="navEff left"></div>
            <div className="navEff right"></div>
          </li>
        </ul>
        */}
      </section>

      <section className="hd-md">

      </section>
      <section className="hd-rgt">
        <div className="authBox">
          <span className="authBtn">Đăng Ký</span>
          <hr />
          <span className="authBtn">Đăng Nhập</span>
        </div>
      </section>
    </section>
  )
}
