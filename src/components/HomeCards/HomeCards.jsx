import React from 'react'
import Car from '../../img/car.avif'
import Home from '../../img/home.avif'
import Random from '../../img/random.avif'
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
            <p><a className="link-opacity-100" href="/x-mas-app/home">See More</a></p>

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
            <p><a className="link-opacity-100" href="/x-mas-app/car">See More</a></p>
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
            <p><a className="link-opacity-100" href="/x-mas-app/entertainment">See More</a></p>

          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={Random} className="card-img-top" alt="Random" />
          <div className="card-body">
            <h5 className="card-title">Random</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="card-footer">
            <p><a className="link-opacity-100" href="/x-mas-app/random">See More</a></p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCards