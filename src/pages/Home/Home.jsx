import React, { useState } from 'react'
import itemsData from '../../itemsData'

const Home = ({ title }) => {

  const [items, setItems] = useState(itemsData)



  return (
    <div className='mt-3 w-75 mx-auto'>  <h1 className='text-center m-4'>{title}</h1>
      {items.length < 1 ? "There is nothing here" : <div className="card mb-3 mx-auto" style={{ maxWidth: "540px" }}>
        {items.map((item, i) => {
          return <div key={i} className="row g-0">
            <div className="col">
              <div className="card">
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>}





    </div>
  )
}

export default Home