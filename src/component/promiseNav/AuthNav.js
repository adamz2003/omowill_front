import React from "react";
import "./authNav.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useCookies } from 'react-cookie';

export default function AuthNav() {
  const [cookies, setCookie] = useCookies(['auth']);
  const {logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
    setCookie('auth', false, {path: '/'})
    navigate('/');
  };
  return (
    <div>
      <nav className="navbar navbar-expand-xl fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h6 className="text-dark fw-bold mb-0 mt-3">想いを「今」残す</h6>
            <h2 className="text-dark">
              OMOW<span className="opacity-3">I</span>LL
            </h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="fa fa-reorder"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <div className="me-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link text-dark fw-bold font-primary"
                  to="/ability"
                >
                  OMOWILLでできること
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark fw-bold font-primary"
                  to="/about"
                >
                  動画や手紙の閲覧について
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark fw-bold font-primary"
                  to="/info"
                >
                  お知らせ
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-dark fw-bold font-primary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  マイページ
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/mypage/death">
                      亡くなった時
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mypage/newborn">
                      生誕時
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mypage/smpwill">
                      遺言書の見本
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-primary"
                  onClick={handleLogout}
                >
                  <i className="fa fa-sign-out"></i>
                  &nbsp;&nbsp;&nbsp;ログアウト
                </button>
              </li>
            </ul>
            {/* <ul className="navbar-nav dropdown">
              <li className="nav-item">
                <Link
                  className="nav-link text-dark fw-bold font-primary"
                  to="/mypage/death"
                >
                  亡くなった時
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark fw-bold font-primary"
                  to="/mypage/newborn"
                >
                  生誕時
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark fw-bold font-primary"
                  to="/mypage/smpwill"
                >
                  遺言書の見本
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
      <div className="navtop"></div>
    </div>
  );
}
