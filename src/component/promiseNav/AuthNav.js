import React from "react";
import './authNav.css'
import { Link } from "react-router-dom";

export default function AuthNav() {
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
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  <button className="btn btn-primary">
                    <i className="fa fa-user-plus"></i>
                    &nbsp;&nbsp;&nbsp;ご利用登録
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <button className="btn btn-primary">
                    <i className="fa fa-user"></i>
                    &nbsp;&nbsp;&nbsp;マイページ
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="navtop"></div>
    </div>
  );
}
