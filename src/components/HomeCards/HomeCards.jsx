import React from 'react'
import Car from '../../img/car.avif'
import Home from '../../img/home.avif'
import Entertainment from '../../img/entertainment.avif'

const HomeCards = () => {
  return (
    <div className="mt-2 row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <img src={Home} className="card-img-top" alt="Home" />
          <div className="card-body">
            <h5 className="card-title">Home</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">See More</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={Car} className="card-img-top" alt="Car" />
          <div className="card-body">
            <h5 className="card-title">Car</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">See More</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={Entertainment} className="card-img-top" alt="Entertainment" />
          <div className="card-body">
            <h5 className="card-title">Entertainment</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">See More</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Other</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div className="card-footer">
            {/* <small className="text-body-secondary">See More</small> */}
            <p><a className="link-opacity-100" href="#">See More</a></p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCards