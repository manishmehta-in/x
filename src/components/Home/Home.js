import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="col-lg-7 p-0 m-0">
        <div  className="py-2">
          <Link to='/' className="text-secondary fs-5 fw-semibold mx-2 text-decoration-none">Home</Link>
        </div>
        <ul class="nav nav-underline d-flex justify-content-around ">
          <li class="nav-item text-center">
            <Link className="nav-link  " to="">
              <span className="text-secondary">For You</span>
            </Link>
          </li>
          <li class="nav-item  text-center">
            <Link className="nav-link  " to="">
              <span className="text-secondary">Following</span>
            </Link>
          </li>
        </ul>
        <hr className="m-0 p-0 w-100" />
      </div>
      <div className="col-lg-2 d-flex p-0 ">
      <div className="d-flex  p-0 me-auto" style={{height: "100vh"}}>
        <div class="vr"></div>
      </div>
      <div >
        <div className="text-center"><p className="">What’s happening</p></div>
      </div>
     </div>
    </>
  );
}

export default Home;
