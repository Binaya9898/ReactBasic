import React from 'react'

export default function Cards({title,clr,img}) {
  return (
    <div className="container-fluid mt-5 col-md-10">
  <div className="d-flex">
    <div className="card mx-4" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Some quick example text for Card 1.</p>
        <a href="#" className={`btn btn-${clr} col-md-12`}>Go somewhere</a>
      </div>
    </div>

  </div>
</div>

  )
}

