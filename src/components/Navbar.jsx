import React from "react";

function Navbar({color,param}) {
  return (
    <>

  
    <nav className={`navbar navbar-expand-lg bg-${color}`}>
  <div className="container-fluid">
    <a className="navbar-brand text-light mx-3" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item mx-4">
          <a className="nav-link active text-light" aria-current="page" href="#"></a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link active text-light" aria-current="page" href="#"></a>
        </li>
        
        <li className="nav-item mx-2">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>

        <li className="nav-item mx-2">
          <a className="nav-link active text-light" aria-current="page" href="#">About</a>
        </li>

        <li className="nav-item mx-2">
          <a className="nav-link active text-light" aria-current="page" href="#">Contact</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link active text-light" aria-current="page" href="#" onClick={param}>Projects</a>
        </li>
        
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </>
  
  );
}

export default Navbar;


