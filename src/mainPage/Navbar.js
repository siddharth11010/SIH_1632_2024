import "../mainPage/main.css";
import {Link} from "react-router-dom";
 
export default function Navbar() {
  return (
    <div class="mb-5">
      <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary border-bottom" >
        <div class="container-fluid">
          <Link class="navbar-brand" to={"/"}>
            <img
              className="logo"
              src="logo1.png"
            ></img>
            CareerQuest
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  class="nav-link "
                  aria-current="page"
                  to={"/work"}
                >
                  Find Jobs
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/courses"}>
                  Courses
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/internships"}>
                  Internships
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/employers"}>
                  Employers
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to={"/support"}>
                  Customer Support
                </Link>
              </li>
            </ul>
            <div class="navbar-nav ms-auto ">
              <Link class="nav-link " to={"/signup"}>
                <b>Sign Up</b>
              </Link>
              <Link class="nav-link" to={"/login"}>
                <b>Log in</b>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
