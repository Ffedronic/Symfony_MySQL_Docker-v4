import React, { Fragment } from "react";

function FirstForm() {
  return (
    <Fragment>
      <p className="">
        Fill your date, the hour and the number of guests you want.
      </p>
      <article className="">
        <form>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="datePicker">Date</label>
                <input
                  type="date"
                  name="datePicker"
                  id="datePicker"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="timePicker">Time</label>
                <select class="form-control" id="timePicker" required>
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="guests">Guests</label>
                <input
                  required
                  type="number"
                  name="guests"
                  id="guests"
                  min={0}
                  className=" form-control"
                />
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Verify
          </button>
        </form>
      </article>
    </Fragment>
  );
}

export default FirstForm;
