function TodoItem() {
  let todoName='Sleeping';
      let todoDate='12/01/2024';
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            {todoName}
          </div>
          <div className="col-4">
           {todoDate}
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>

    </>
  )

}
export default TodoItem;