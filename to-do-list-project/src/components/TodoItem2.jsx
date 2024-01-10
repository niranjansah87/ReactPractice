function TodoItem2() {
    let todoName='Coding';
      let todoDate='11/01/2024';
    return (
        <div className="row kg-row">
        <div className="container text-center">
          <div className="row">
            <div className="col-6">
            <h5> {todoName}</h5>
            </div>
            <div className="col-4">
            <h5>{todoDate}</h5>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
        </div>
      
    );
  
  }
  export default TodoItem2;