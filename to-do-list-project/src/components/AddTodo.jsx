function AddTodo() {
  return (
    <>
      <div className="row kg-row">
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
    </>

  )

}
export default AddTodo;