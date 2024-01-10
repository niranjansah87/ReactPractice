

function App() {


  return (
    <>
      <div className="container">
        <h1>TODO App</h1>
        <div className="container text-center">

          <div className="row">
            <div className="col-6">
              <input type="text" name="" placeholder="Enter Todo list" id="" />
            </div>
            <div className="col-4">
              <input type="date" name="" id="" />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-success">Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            Coding
          </div>
          <div className="col-4">
            11/01/2024
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            Sleeping
          </div>
          <div className="col-4">
            12/01/2024
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
     
    </>

  )
}

export default App
