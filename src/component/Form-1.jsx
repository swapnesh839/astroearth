import React from 'react'

const Form_1 = () => {
  return (
    <div className="mt-5 bg-dark rounded-1 p-5">
          <form>
            <div className="row">
              <div className="col-md-3">
                <label className="form-label fs-3" htmlFor="Date">Date Of Birth</label> <br />
                <input type="date" id='Date' className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label fs-3" htmlFor="Time">Time Of Birth</label> <br />
                <input type="time" id='Time' className="form-control" />
              </div>
              <div className="col-md-3">
                <label className="form-label fs-3" htmlFor="Text">Place Of Birth</label> <br />
                <input type="text" id='Text' className="form-control" />
              </div>
              <div className="col-md-3 df">
                <button type="button" className="btn btn-lg rounded-0 w-100  bgclr-1 fnt-3 fw-bold mt-4 rounded-2"> Read more</button>
              </div>
            </div>
          </form>
        </div>
  )
}

export default Form_1