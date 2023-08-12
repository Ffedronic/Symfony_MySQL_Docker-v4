import React, { Fragment } from "react";
function SecondForm() {
  return (
    <Fragment>
      <p className="">
        Fill your name, your email and your phone number to validate your
        reservation.
      </p>
      <article className="">
        <form>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="namePicker">Name</label>
                <input
                  required
                  type="text"
                  name="namePicker"
                  id="namePicker"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="emailPicker">Email</label>
                <input
                  required
                  className=" form-control"
                  type="email"
                  name="emailPicker"
                  id="emailPicker"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="telPicker">Phone number</label>
                <input
                  required
                  className=" form-control"
                  type="tel"
                  name="telPicker"
                  id="telPicker"
                />
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </article>
    </Fragment>
  );
}

export default SecondForm;
