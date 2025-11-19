import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [count, setCount] = useState(2300)
  const [inputValue, setInputValue] = useState(0)
  const [myMoves, setMyMoves] = useState([])

  const increase = (amount) => {
    setCount(count + amount)

  }

  const decrease = (amount) => {
    setCount(count - amount)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCount(count - parseInt(inputValue))
    setMyMoves([count, ...myMoves])
  }


  return (
    <div className='w-75 mx-auto m-4 text-center'>
      <h1 >Money in the bank</h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: "24px" }}>
        <button onClick={() => increase(1)} className='btn btn-danger w-25'>Up</button>
        <button onClick={() => decrease(1)} className='btn btn-danger w-25'>Down</button>
      </div>
      {count < 0 ?
        <p className='text-danger mt-3'>You are in the negative ${count}</p>
        :
        <p className='text-success mt-3'>${count}</p>
      }
      <br />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button onClick={() => decrease(1900)} className="btn btn-primary" type="submit">Rent 🏡</button>
        <button onClick={() => increase(2100)} className="btn btn-primary" type="submit">Pay Day 💰</button>
        <button onClick={() => decrease(61)} className="btn btn-primary" type="submit">Phone 📱</button>
      </div>
      <br />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input onChange={(e) => setInputValue(e.target.value)} type="number" placeholder='Price...' />
        <button className='btn btn-info btn-sm' type='submit'>Add</button>
      </form>
      <button onClick={() => setCount(0)} className='btn btn-sm btn-warning m-2'>RESET</button>
      {myMoves.map((move, i) => {
        return <div key={i} className="card w-75 mb-3 mx-auto">
          <div className="card-body">
            <h5 className="card-title">{move}</h5>
            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Button</a> */}
          </div>
        </div>
      })}
    </div>
  )
}

export default App
